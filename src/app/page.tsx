"use client"

import {dict} from "@/zh-cn";
import {Fragment, useEffect, useState} from "react";
const {basic, remote, applying} = dict.access;
import {AccessApplyPayload as Wrapper} from "@prisma/client";
import {AccessApplyPayload} from "@/types";
import {fetchData, setAccept, setReject} from "@/app/db";

function toDisplayText(typeName: "choice" | "number" | "dateFull" | "dateYearMonth" | "open") {
    switch (typeName) {
        case "choice":
            return applying.design.question.branches.choice.name;
        case "number":
            return applying.design.question.branches.number.name;
        case "dateFull":
            return applying.design.question.branches.dateFull.name;
        case "dateYearMonth":
            return applying.design.question.branches.dateYearMonth.name;
        case "open":
            return applying.design.question.branches.open.name;
    }
}

export default function Page() {
    const [data, setData] = useState<
        (Wrapper & {payload: AccessApplyPayload})[]
    >([])
    const [modifyFlag, setModifyFlag] = useState(0)

    useEffect(() => {
        const updateData = async () => {
            setData(await fetchData() as unknown as (Wrapper & {payload: AccessApplyPayload})[])
        }

        updateData()
    }, [modifyFlag]);

    return <Fragment>
        {data.map((item, idx) => {
            return (
                <div key={idx}>
                    <b>{basic.title}</b> <br/>
                    <b>{basic.name.title}:</b> {item.payload.basic.name} <br/>
                    <b>{basic.logoLink.title}:</b> {item.payload.basic.logoLink} <br/>
                    <b>{basic.coverLink.title}:</b> {item.payload.basic.coverLink} <br/>
                    <b>{basic.introduction.title}:</b> <br/>{item.payload.basic.introduction}<br/>
                    <b>{remote.title}</b> <br/>
                    {item.payload.remote.java && <>
                        <b>Java:</b> <br/>
                        <b>{remote.common.address.title}:</b> {item.payload.remote.java.address} <br/>
                        <b>{remote.common.port.title}:</b> {item.payload.remote.java.port} <br/>
                        <b>{remote.common.compatibleVersions.title}:</b> {item.payload.remote.java.compatibleVersions.join(", ")}
                        <br/>
                        <b>{remote.common.coreVersion}:</b> {item.payload.remote.java.coreVersion} <br/>
                        <b>Auth:</b> {item.payload.remote.java.auth} <br/>
                        {item.payload.remote.java.modpackVersionId && <>
                            <b>{remote.java.mod.versionId}:</b> {item.payload.remote.java.modpackVersionId} <br/>
                        </>}
                    </>}
                    {item.payload.remote.bedrock && <>
                        <b>Bedrock</b>: <br/>
                        <b>{remote.common.address.title}:</b> {item.payload.remote.bedrock.address} <br/>
                        <b>{remote.common.port.title}:</b> {item.payload.remote.bedrock.port} <br/>
                        <b>{remote.common.compatibleVersions.title}:</b> {item.payload.remote.bedrock.compatibleVersions.join(", ")}
                        <br/>
                        <b>{remote.common.coreVersion}:</b> {item.payload.remote.bedrock.coreVersion} <br/>
                    </>}
                    <br/>

                    <b>{applying.title}:</b> {item.payload.applying.policy} <br/>
                    {item.payload.applying.form && <>
                        <b>Form:</b> <br/>
                        {item.payload.applying.form.title} <br/>
                        {item.payload.applying.form.preface} <br/>
                        {item.payload.applying.form.questions.map((question, index) => <div key={index}>
                            <b>{index + 1}.</b> ({toDisplayText(question.branches.type)}) {question.content}
                            <i>{question.hint}</i>
                            {question.branches.type === "choice" && <>
                                [{question.branches.hasBlank && applying.design.question.branches.choice.hasBlank}]
                                [{question.branches.allowMultipleChoices && applying.design.question.branches.choice.allowMultipleChoices}]
                                <br/>
                                {question.branches.choices.map((choice, index) => <>
                                    (Choice {index + 1}) {choice} <br/>
                                </>)}
                            </>}
                            {question.branches.type === "open" && <>
                                [{question.branches.allowMultipleLines && applying.design.question.branches.open.allowMultipleLines}]
                            </>}
                            {(
                                question.branches.type === "number" ||
                                question.branches.type === "dateYearMonth" ||
                                question.branches.type === "dateFull"
                            ) && <br/>}
                        </div>)}
                    </>}
                    <br/>
                    <button onClick={async () => {
                        await setAccept(item.id)
                        setModifyFlag(prevState => prevState + 1)
                    }}>Accept</button>
                    <button onClick={async () => {
                        await setReject(item.id)
                        setModifyFlag(prevState => prevState + 1)
                    }}>Reject</button>
                </div>
            )
        })}
    </Fragment>
}