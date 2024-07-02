
<p align="left">
  <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-filled-tal-revivo.png" width="100" />
</p>
<p align="left">
    <h1 align="left">CODELESS-PLATFORM-FOR-DATA-MANAGEMENT</h1>
</p>
<p align="left">
    <em>HTTP error 429 for prompt `slogan`</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/Aaditatgithub/Codeless-Platform-for-Data-Management?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Aaditatgithub/Codeless-Platform-for-Data-Management?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Aaditatgithub/Codeless-Platform-for-Data-Management?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Aaditatgithub/Codeless-Platform-for-Data-Management?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="left">
		<em>Developed with the software and tools below.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white" alt="java">
</p>
<hr>

### Data Provision
1. Start off by uploading the csv file wherein your previous data is stored
2. CreateTemplate button will allow you to visualize the json of datatype of the csv as entity
3. Templates (datatype) will be stored seperately in the database
4. Objects corresponding to a template will be accepted and sent to backend

### Analytics Service
1. You can perform aggregate function related and logical operation on the objects of template you wish to work upon.

### Expression Creation
1. This page will allow you to modify the existing templates and their corresponding objects by adding custom expressions by leveraging the existing attributes and expresssions present inside multiple templates in the DB.
2. This shall open doors for comparing performances of different entities in analytics.

### Payroll Check
1. We tried to ensure the variety of data that could be managed. Apart from automating payroll processing for employees, we also have performed realtime Induction motor analysis. 

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
---

##  Overview

HTTP error 429 for prompt `overview`

---

##  Features

HTTP error 429 for prompt `features`

---

##  Repository Structure

```sh
└── Codeless-Platform-for-Data-Management/
    ├── Frontend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── pnpm-lock.yaml
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── logo192.png
    │   │   ├── logo512.png
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   ├── src
    │   │   ├── App.js
    │   │   ├── App.test.js
    │   │   ├── MainPage.jsx
    │   │   ├── global
    │   │   │   ├── Header.jsx
    │   │   │   ├── Operations
    │   │   │   │   ├── CreateTemplate.jsx
    │   │   │   │   ├── DeleteTemplate.jsx
    │   │   │   │   ├── Operations.jsx
    │   │   │   │   ├── ReadTemplates.jsx
    │   │   │   │   ├── SpreadSheetView.jsx
    │   │   │   │   └── UpdateTemplate.jsx
    │   │   │   ├── analytics
    │   │   │   │   └── AnalyticsService.jsx
    │   │   │   ├── api
    │   │   │   │   ├── ApiClient.js
    │   │   │   │   ├── ObjectApiServices.js
    │   │   │   │   ├── PayrollCheck.js
    │   │   │   │   └── TemplateApiServices.js
    │   │   │   ├── dataProvision
    │   │   │   │   ├── DataProvision.jsx
    │   │   │   │   └── data-provision-image.png
    │   │   │   ├── expressionEval
    │   │   │   │   ├── ExpressionEval.jsx
    │   │   │   │   └── TemplateView.css
    │   │   │   ├── motorAnalysis
    │   │   │   │   └── MotorAnalysisComponent.jsx
    │   │   │   ├── payrollCheck
    │   │   │   │   ├── PayrollCheck.jsx
    │   │   │   │   └── TickMarkAnimation.css
    │   │   │   └── sidebar.jsx
    │   │   ├── index.css
    │   │   ├── index.js
    │   │   ├── logo.svg
    │   │   ├── reportWebVitals.js
    │   │   └── setupTests.js
    │   ├── src.zip
    │   └── tailwind.config.js
    ├── README.md
    └── SpringTest
        ├── .idea
        │   ├── SpringTest.iml
        │   ├── misc.xml
        │   ├── modules.xml
        │   ├── vcs.xml
        │   └── workspace.xml
        └── SpringTest
            ├── .gitignore
            ├── .mvn
            │   └── wrapper
            │       ├── maven-wrapper.jar
            │       └── maven-wrapper.properties
            ├── mvnw
            ├── mvnw.cmd
            ├── pom.xml
            └── src
                ├── main
                │   └── java
                └── test
                    └── java
```

---

##  Modules

<details closed><summary>SpringTest.SpringTest</summary>

| File                                                                                                                          | Summary                                                    |
| ---                                                                                                                           | ---                                                        |
| [mvnw.cmd](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/mvnw.cmd) | HTTP error 429 for prompt `SpringTest/SpringTest/mvnw.cmd` |
| [pom.xml](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/pom.xml)   | HTTP error 429 for prompt `SpringTest/SpringTest/pom.xml`  |
| [mvnw](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/mvnw)         | HTTP error 429 for prompt `SpringTest/SpringTest/mvnw`     |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.ObjectMapper</summary>

| File                                                                                                                                                                     | Summary                                                                                       |
| ---                                                                                                                                                                      | ---                                                                                           |
| [JSON_Parsor.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/ObjectMapper/JSON_Parsor.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/ObjectMapper/JSON_Parsor.java` |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.com.example.Sample.SpringTest</summary>

| File                                                                                                                                                                                                          | Summary                                                                                                                  |
| ---                                                                                                                                                                                                           | ---                                                                                                                      |
| [SpringTestApplication.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/SpringTestApplication.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/SpringTestApplication.java` |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.com.example.Sample.SpringTest.repository</summary>

| File                                                                                                                                                                                                               | Summary                                                                                                                          |
| ---                                                                                                                                                                                                                | ---                                                                                                                              |
| [TemplateRepository.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/repository/TemplateRepository.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/repository/TemplateRepository.java` |
| [ObjectRepository.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/repository/ObjectRepository.java)     | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/repository/ObjectRepository.java`   |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.com.example.Sample.SpringTest.controller</summary>

| File                                                                                                                                                                                                               | Summary                                                                                                                          |
| ---                                                                                                                                                                                                                | ---                                                                                                                              |
| [ObjController.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/controller/ObjController.java)           | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/controller/ObjController.java`      |
| [TemplateController.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/controller/TemplateController.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/controller/TemplateController.java` |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.com.example.Sample.SpringTest.collection</summary>

| File                                                                                                                                                                                                                     | Summary                                                                                                                             |
| ---                                                                                                                                                                                                                      | ---                                                                                                                                 |
| [ArithmeticExpression.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/ArithmeticExpression.java)   | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/ArithmeticExpression.java`  |
| [MDM_Expressions.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/MDM_Expressions.java)             | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/MDM_Expressions.java`       |
| [Object.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Object.java)                               | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Object.java`                |
| [Attribute_Template.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Attribute_Template.java)       | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Attribute_Template.java`    |
| [ConditionalExpression.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/ConditionalExpression.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/ConditionalExpression.java` |
| [Attribute_Object.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Attribute_Object.java)           | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Attribute_Object.java`      |
| [Template.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Template.java)                           | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/collection/Template.java`              |

</details>

<details closed><summary>SpringTest.SpringTest.src.main.java.com.example.Sample.SpringTest.service</summary>

| File                                                                                                                                                                                                                                  | Summary                                                                                                                                  |
| ---                                                                                                                                                                                                                                   | ---                                                                                                                                      |
| [TemplateServiceImplementation.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/TemplateServiceImplementation.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/TemplateServiceImplementation.java` |
| [ObjectService.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/ObjectService.java)                                 | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/ObjectService.java`                 |
| [ObjectServiceImpl.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/ObjectServiceImpl.java)                         | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/ObjectServiceImpl.java`             |
| [TemplateService.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/TemplateService.java)                             | HTTP error 429 for prompt `SpringTest/SpringTest/src/main/java/com/example/Sample/SpringTest/service/TemplateService.java`               |

</details>

<details closed><summary>SpringTest.SpringTest.src.test.java.com.example.Sample.SpringTest</summary>

| File                                                                                                                                                                                                                    | Summary                                                                                                                       |
| ---                                                                                                                                                                                                                     | ---                                                                                                                           |
| [SpringTestApplicationTests.java](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/SpringTest/SpringTest/src/test/java/com/example/Sample/SpringTest/SpringTestApplicationTests.java) | HTTP error 429 for prompt `SpringTest/SpringTest/src/test/java/com/example/Sample/SpringTest/SpringTestApplicationTests.java` |

</details>

<details closed><summary>Frontend</summary>

| File                                                                                                                                 | Summary                                                 |
| ---                                                                                                                                  | ---                                                     |
| [package.json](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/package.json)             | HTTP error 429 for prompt `Frontend/package.json`       |
| [tailwind.config.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/tailwind.config.js) | HTTP error 429 for prompt `Frontend/tailwind.config.js` |
| [package-lock.json](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/package-lock.json)   | HTTP error 429 for prompt `Frontend/package-lock.json`  |
| [pnpm-lock.yaml](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/pnpm-lock.yaml)         | HTTP error 429 for prompt `Frontend/pnpm-lock.yaml`     |

</details>

<details closed><summary>Frontend.public</summary>

| File                                                                                                                              | Summary                                                   |
| ---                                                                                                                               | ---                                                       |
| [index.html](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/public/index.html)       | HTTP error 429 for prompt `Frontend/public/index.html`    |
| [manifest.json](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/public/manifest.json) | HTTP error 429 for prompt `Frontend/public/manifest.json` |
| [robots.txt](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/public/robots.txt)       | HTTP error 429 for prompt `Frontend/public/robots.txt`    |

</details>

<details closed><summary>Frontend.src</summary>

| File                                                                                                                                     | Summary                                                     |
| ---                                                                                                                                      | ---                                                         |
| [reportWebVitals.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/reportWebVitals.js) | HTTP error 429 for prompt `Frontend/src/reportWebVitals.js` |
| [App.test.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/App.test.js)               | HTTP error 429 for prompt `Frontend/src/App.test.js`        |
| [setupTests.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/setupTests.js)           | HTTP error 429 for prompt `Frontend/src/setupTests.js`      |
| [MainPage.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/MainPage.jsx)             | HTTP error 429 for prompt `Frontend/src/MainPage.jsx`       |
| [App.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/App.js)                         | HTTP error 429 for prompt `Frontend/src/App.js`             |
| [index.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/index.js)                     | HTTP error 429 for prompt `Frontend/src/index.js`           |
| [index.css](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/index.css)                   | HTTP error 429 for prompt `Frontend/src/index.css`          |

</details>

<details closed><summary>Frontend.src.global</summary>

| File                                                                                                                              | Summary                                                     |
| ---                                                                                                                               | ---                                                         |
| [Header.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Header.jsx)   | HTTP error 429 for prompt `Frontend/src/global/Header.jsx`  |
| [sidebar.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/sidebar.jsx) | HTTP error 429 for prompt `Frontend/src/global/sidebar.jsx` |

</details>

<details closed><summary>Frontend.src.global.Operations</summary>

| File                                                                                                                                                         | Summary                                                                        |
| ---                                                                                                                                                          | ---                                                                            |
| [SpreadSheetView.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/SpreadSheetView.jsx) | HTTP error 429 for prompt `Frontend/src/global/Operations/SpreadSheetView.jsx` |
| [CreateTemplate.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/CreateTemplate.jsx)   | HTTP error 429 for prompt `Frontend/src/global/Operations/CreateTemplate.jsx`  |
| [Operations.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/Operations.jsx)           | HTTP error 429 for prompt `Frontend/src/global/Operations/Operations.jsx`      |
| [UpdateTemplate.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/UpdateTemplate.jsx)   | HTTP error 429 for prompt `Frontend/src/global/Operations/UpdateTemplate.jsx`  |
| [ReadTemplates.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/ReadTemplates.jsx)     | HTTP error 429 for prompt `Frontend/src/global/Operations/ReadTemplates.jsx`   |
| [DeleteTemplate.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/Operations/DeleteTemplate.jsx)   | HTTP error 429 for prompt `Frontend/src/global/Operations/DeleteTemplate.jsx`  |

</details>

<details closed><summary>Frontend.src.global.expressionEval</summary>

| File                                                                                                                                                           | Summary                                                                           |
| ---                                                                                                                                                            | ---                                                                               |
| [TemplateView.css](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/expressionEval/TemplateView.css)     | HTTP error 429 for prompt `Frontend/src/global/expressionEval/TemplateView.css`   |
| [ExpressionEval.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/expressionEval/ExpressionEval.jsx) | HTTP error 429 for prompt `Frontend/src/global/expressionEval/ExpressionEval.jsx` |

</details>

<details closed><summary>Frontend.src.global.dataProvision</summary>

| File                                                                                                                                                        | Summary                                                                         |
| ---                                                                                                                                                         | ---                                                                             |
| [DataProvision.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/dataProvision/DataProvision.jsx) | HTTP error 429 for prompt `Frontend/src/global/dataProvision/DataProvision.jsx` |

</details>

<details closed><summary>Frontend.src.global.motorAnalysis</summary>

| File                                                                                                                                                                          | Summary                                                                                  |
| ---                                                                                                                                                                           | ---                                                                                      |
| [MotorAnalysisComponent.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/motorAnalysis/MotorAnalysisComponent.jsx) | HTTP error 429 for prompt `Frontend/src/global/motorAnalysis/MotorAnalysisComponent.jsx` |

</details>

<details closed><summary>Frontend.src.global.api</summary>

| File                                                                                                                                                        | Summary                                                                    |
| ---                                                                                                                                                         | ---                                                                        |
| [ObjectApiServices.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/api/ObjectApiServices.js)     | HTTP error 429 for prompt `Frontend/src/global/api/ObjectApiServices.js`   |
| [TemplateApiServices.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/api/TemplateApiServices.js) | HTTP error 429 for prompt `Frontend/src/global/api/TemplateApiServices.js` |
| [ApiClient.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/api/ApiClient.js)                     | HTTP error 429 for prompt `Frontend/src/global/api/ApiClient.js`           |
| [PayrollCheck.js](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/api/PayrollCheck.js)               | HTTP error 429 for prompt `Frontend/src/global/api/PayrollCheck.js`        |

</details>

<details closed><summary>Frontend.src.global.analytics</summary>

| File                                                                                                                                                          | Summary                                                                        |
| ---                                                                                                                                                           | ---                                                                            |
| [AnalyticsService.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/analytics/AnalyticsService.jsx) | HTTP error 429 for prompt `Frontend/src/global/analytics/AnalyticsService.jsx` |

</details>

<details closed><summary>Frontend.src.global.payrollCheck</summary>

| File                                                                                                                                                               | Summary                                                                            |
| ---                                                                                                                                                                | ---                                                                                |
| [PayrollCheck.jsx](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/payrollCheck/PayrollCheck.jsx)           | HTTP error 429 for prompt `Frontend/src/global/payrollCheck/PayrollCheck.jsx`      |
| [TickMarkAnimation.css](https://github.com/Aaditatgithub/Codeless-Platform-for-Data-Management/blob/master/Frontend/src/global/payrollCheck/TickMarkAnimation.css) | HTTP error 429 for prompt `Frontend/src/global/payrollCheck/TickMarkAnimation.css` |

</details>
---
