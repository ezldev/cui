module.exports = {
    reset: [
        `drop table "SYSTEM"."CM_TOPICS" `,
        `drop table "SYSTEM"."CM_GROUPS"`,
        `drop table "SYSTEM"."CM_GROUPTOPIC"`,
        `drop table "SYSTEM"."CM_RULES"`,
        `drop table "SYSTEM"."CM_RULETOPIC"`,
        `drop table "SYSTEM"."CM_FILES"`
    ],
    init: [
        `CREATE TABLE "SYSTEM"."CM_TOPICS" 
        (	"id" CHAR(36 BYTE), 
         "label" VARCHAR2(255 BYTE) NOT NULL ENABLE, 
         "status" VARCHAR2(255 BYTE) NOT NULL ENABLE, 
         "active" NUMBER(1,0) NOT NULL ENABLE, 
         "createdAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE, 
         "updatedAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE)`,

        `CREATE TABLE CM_GROUPS 
          (
            ID VARCHAR2(255) NOT NULL 
          , LABEL VARCHAR2(255) NOT NULL 
          , ADGROUP VARCHAR2(255) 
          );
          `,
        `CREATE TABLE CM_GROUPTOPIC 
          (
            ID VARCHAR2(255) NOT NULL 
          , GROUPID VARCHAR2(255) NOT NULL 
          , TOPICID VARCHAR2(255) NOT NULL 
          );
          `,

        `CREATE TABLE "SYSTEM"."CM_RULES" 
          (	"id" CHAR(36 BYTE), 
           "name" VARCHAR2(255 BYTE) NOT NULL ENABLE, 
           "configuration" CLOB, 
           "createdAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE, 
           "updatedAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE)`,

        ` CREATE TABLE "SYSTEM"."CM_RULETOPIC" 
            (	"id" CHAR(36 BYTE), 
             "ruleId" CHAR(36 BYTE) NOT NULL ENABLE, 
             "topicId" CHAR(36 BYTE) NOT NULL ENABLE, 
             "createdAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE, 
             "updatedAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE
            )`,

        ` CREATE TABLE "SYSTEM"."CM_FILES" 
            (	"id" CHAR(36 BYTE), 
             "name" VARCHAR2(255 BYTE) NOT NULL ENABLE, 
             "location" VARCHAR2(255 BYTE) NOT NULL ENABLE, 
             "version" NUMBER(*,0) NOT NULL ENABLE, 
             "createdAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE, 
             "updatedAt" TIMESTAMP (6) WITH LOCAL TIME ZONE NOT NULL ENABLE, 
             "topicId" CHAR(36 BYTE))`


    ],

    fill: []


}