export const dict = {
    access: {
        title: "申请接入",
        license: "",
        confirm: "是的，我已满18岁",
        go: "开始申请",
        steps: "填写信息",
        basic: {
            title: "基本信息",
            name: {
                title: "服务器名称",
                hint: {
                    invalidLength: "长度必须在 3~30 个字符之间。"
                }
            },
            logoLink: {
                title: "Logo 图片链接",
                hint: {
                    fallback: "请将图片上传至外部图床。建议宽、高相等且大于 64px。",
                    invalid: "URL 格式不合法"
                }
            },
            coverLink: {
                title: "封面图片链接",
                hint: {
                    fallback: "请将图片上传至外部图床。建议宽高比 16:9。",
                    invalid: "URL 格式不合法"
                },
                preview: {
                    title: "预览",
                    error: "图片加载出错。",
                    hint: "若图片宽高比不是 16:9，则在显示时会被裁去一部分。请在此确认渲染效果。"
                }
            },
            introduction: {
                title: "服务器介绍（Markdown 格式）",
                hint: {
                    fallback: "建议在其他的 Markdown 编辑器中编辑后再复制到此处。",
                    invalidLength: "长度必须在 3000 个字符之内"
                }
            }
        },
        remote: {
            title: "远程信息",
            common: {
                address: {
                    title: "服务器地址",
                    hint: {
                        fallback: "域名或 IP",
                        invalid: "服务器地址格式不正确"
                    }
                },
                port: {
                    title: "服务器端口",
                    hint: {
                        fallback: "0~65535 之间的整数",
                        invalid: "服务器端口格式不正确"
                    }
                },
                compatibleVersions: {
                    title: "兼容版本",
                    hint: {
                        atLeastOne: "请选择至少一个版本。"
                    }
                },
                coreVersion: "服务端核心版本"
            },
            java: {
                supports: "支持 Java 版",
                auth: {
                    microsoft: "正版验证",
                    littleSkin: "LittleSkin 外置登录",
                    offline: "离线(盗版)"
                },
                mod: {
                    hint: "如果你的服务器是 Mod 服，请在 Modrinth 上创建包含所需 Mod 和资源包的 Project，并填写以下内容。",
                    project: {
                        title: "Project ID 或 Slug",
                        hint: {
                            invalid: "ID 或 Slug 不合法或不存在"
                        }
                    },
                    versionId: "版本 ID"
                }
            },
            bedrock: {
                supports: "支持基岩版"
            }
        },
        applying: {
            title: "申请政策",
            policy: {
                allOpen: "无需审核",
                byForm: "需要填写问卷"
            },
            design: {
                common: {
                    required: "必填",
                    up: "上移",
                    down: "下移",
                    add: "添加",
                    delete: "删除"
                },
                formTitle: {
                    title: "标题",
                    hint: {
                        invalidLength: "长度必须在 1~30 个字符之间"
                    }
                },
                preface: {
                    title: "前言",
                    hint: {
                        invalidLength: "长度必须在 300 个字符以内"
                    }
                },
                question: {
                    content: {
                        title: "题干",
                        hint: {
                            invalidLength: "长度必须在 1~60 个字符之间"
                        }
                    },
                    hint: {
                        title: "提示/备注",
                        hint: {
                            fallback: "",
                            invalidLength: "长度必须在 300 个字符以内"
                        }
                    },
                    branches: {
                        choice: {
                            name: "选择题",
                            choice: {
                                title: "选项",
                                hint: {
                                    invalidLength: "长度必须在 1~20 个字符之间"
                                }
                            },
                            allowMultipleChoices: "多选",
                            hasBlank: "包含“其他”选项"
                        },
                        number: {
                            name: "数字题"
                        },
                        dateFull: {
                            name: "日期题(精确到日)"
                        },
                        dateYearMonth: {
                            name: "日期题(精确到月)"
                        },
                        open: {
                            name: "文字题",
                            allowMultipleLines: "允许多行"
                        }
                    }
                }
            }
        },
        next: "下一步",
        previous: "上一步",
        finalConfirm: "以下是你将要提交的信息预览，请再次确认。确认后，点击“完成”提交。",
        complete: "完成"
    }
}