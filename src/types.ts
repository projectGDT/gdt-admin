export interface JavaRemote {
    address: string;
    port: number;
    coreVersion: string;
    compatibleVersions: string[];
    uniqueIdProvider: number;
    modpackVersionId?: string;
    serverId: number;
}

export interface BedrockRemote {
    address: string;
    port: number;
    coreVersion: string;
    compatibleVersions: string[];
}

export interface Form {
    title: string
    preface: string
    questions: Question[]
}

export interface Question {
    content: string
    hint?: string
    required: boolean
    branches:
        ChoiceBranches |
        NumberBranches |
        DateFullBranches |
        DateYearMonthBranches |
        OpenBranches
}

export interface ChoiceBranches {
    type: "choice"
    choices: string[]
    allowMultipleChoices: boolean
    hasBlank: boolean
}

export interface ChoiceResponse {
    chosenIndexes: number[]
    other?: string
}

export interface NumberBranches {
    type: "number"
}

export interface DateFullBranches {
    type: "dateFull"
}

export interface DateYearMonthBranches {
    type: "dateYearMonth"
}

export interface OpenBranches {
    type: "open"
    allowMultipleLines: boolean
}

export type FormResponse = (
    ChoiceResponse |
    string | // for open questions
    number // for number, dateFull and dateYearMonth questions
)[]

export type AccessApplyPayload = {
    basic: {
        name: string,
        logoLink: string,
        coverLink: string,
        introduction: string
    },
    remote: {
        java?: AccessApplyJavaRemoteMeta,
        bedrock?: BedrockRemote
    },
    applying: {
        policy: ApplyingPolicy,
        form?: Form
    }
}

type RemoteCommonMeta = {
    address: string,
    port: number,
    compatibleVersions: string[],
    coreVersion: string
}

export type AccessApplyJavaRemoteMeta = RemoteCommonMeta & {
    auth: JavaAuthType,
    modpackVersionId?: string
}

export type JavaAuthType = "microsoft" | "littleSkin" | "offline"

export type AccessApplyBedrockRemoteMeta = RemoteCommonMeta

export type ApplyingPolicy = "allOpen" | "byForm"