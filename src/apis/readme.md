# API 概述 The Introduction of APIs

智会平台的 API 使用 RESTful 架构进行设计，在相同操作对象设置相同的地址，同时使用 `POST` `GET` `PUT` `DELETE` 方法进行分别操作。注意，相关的 CURD 操作方式见下表：

The APIs of Zhihui Platform are designed with RESTful architecture. The same address is set for the same operation object, and the `POST` `GET` `PUT` `DELETE` methods are used to operate separately. It is noted that the related `CURD` operation method is shown in the table below:

| 操作 Action | 方法 Method | 说明 Description                                                  |
| :---------- | :---------- | :---------------------------------------------------------------- |
| 创建 Create | POST        | 在数据库中创建新的对象 Create a new object in the database        |
| 读取 Read   | GET         | 在数据库中读取相关对象 Read a specific object in the database     |
| 更新 Update | PUT         | 在数据库中更新原有的对象 Update a specific object in the database |
| 删除 Delete | DELETE      | 在数据库中删除对象 Delete a specific object in the database       |

## 通用参数 Common Parameters

在智会平台的 API 中，相同对象共享一个 API 地址，在前文已经提到。对于不同的查询内容，需要在同一级 API 地址与相同方法中使用 `query` 于 `GET` 方法以及 `body` 于 `POST` 方法中传递参数。在除了使用 `GET` 方法进行查询以外，必须使用 `JSON` 格式作为请求体。

In the APIs of Zhihui Platform, the same object shares a common API address, as mentioned in the previous article. For different query content, the parameters need to be passed in the same level API address and the same method with `query` and `GET` method, and `body` and `POST` method. Except for using the `GET` method to query, the `JSON` format must be used as the request body.

智会平台的 API 认证方式为 `Access Token`。在请求头中使用 `Authorization` 字段传递 `Access Token`，不需要再在请求体中传递 `Access Token`。仅在每次用户登录时，使用加密方式传输用户密码的密文至服务器解密后，服务器在数据库中添加一条 `Access Token` 的记录，其中包括 `username` `access_token` `password_encrypted` `create_date` 相关字段。每次使用 `Access Token` 时，自动将服务器中的数据调用使用，当发现 `Access Token` 已经过期或者数据和原有信息不符合时，自动删除该条记录，并且返回让用户重新登录。

The authentication method of Zhihui Platform is `Access Token`. The `Access Token` is passed in the `Authorization` field in the request header, and the `Access Token` does not need to be passed in the request body. Only when the user logs in, the ciphertext of the user password is transmitted to the server for decryption, and the server adds a record of `Access Token` in the database, including the `username` `access_token` `password_encrypted` `create_date` related fields. Each time the `Access Token` is used, the data in the server is automatically called, and when it is found that the `Access Token` has expired or the data does not match the original information, the record is automatically deleted, and the user is asked to log in again.
