"use server"

import {dict} from "@/zh-cn";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function toDisplayText(typeName: "choice" | "number" | "dateFull" | "dateYearMonth" | "open") {
    switch (typeName) {
        case "choice":
            return dict.access.applying.design.question.branches.choice.name;
        case "number":
            return dict.access.applying.design.question.branches.number.name;
        case "dateFull":
            return dict.access.applying.design.question.branches.dateFull.name;
        case "dateYearMonth":
            return dict.access.applying.design.question.branches.dateYearMonth.name;
        case "open":
            return dict.access.applying.design.question.branches.open.name;
    }
}

export async function fetchData() {
    return prisma.accessApplyPayload.findMany({
        where: {
            state: {
                in: ["REVIEWING"]
            }
        }
    })
        .then(res => res.map(entry => ({
            ...entry,
            createdAt: entry.createdAt.toISOString()
        })))
}

export async function setAccept(id: number) {
    await prisma.accessApplyPayload.update({
        where: {id},
        data: {state: "ACCEPTED"},
    })
}

export async function setReject(id: number) {
    await prisma.accessApplyPayload.update({
        where: {id},
        data: {state: "REJECTED"},
    })
}