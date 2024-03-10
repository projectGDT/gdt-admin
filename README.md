<!-- common contents -->

<div align="center">
    <img width="160" src="logo.svg" alt="logo"><br/>
    projectGDT - for a more connected Minecraft world!<br/>
    QQ Group:
    <a href="https://qm.qq.com/cgi-bin/qm/qr?k=jNFTovEpc0WDFtbSbUMrbQ0NyUgDpnCu&jump_from=webapi&authKey=6oBQQeoeB6gA7+AljJK7AV1IUEjkk/HpkvxrBNgAQtpxPtw230h4GQrp56nTw81I">
        162779544
    </a>
</div>

---

# gdt-admin

运行在后端所在服务器的简单管理平台，目前只用于站点管理员处理接入申请。

鉴权尚未实现，后续会添加此功能。

## 部署

参考前端、后端部署方法。简要流程如下：

1. 创建 `.env` 文件，并按照配置后端的格式填写 `DATABASE_URL`。

2. 运行 `npx prisma generate`。

3. 运行 `npm run dev` 以开发环境启动；运行 `npm run build` 和 `npm run start` 以生产环境启动。