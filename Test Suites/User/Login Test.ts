<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login Test</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>06439ee4-10d0-4d77-9ae7-0bf486ab29de</testSuiteGuid>
   <testCaseLink>
      <guid>3dac3bc7-7d9d-4c7c-ba5f-17593de5ed84</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Password Masking On</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>f623b91d-7ca1-4f8e-8ca0-e3d54c3826b8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Password Masking Off</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>905b4575-a0fe-4caf-9c6a-ebce1f5944a5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Login Invalid</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>4d2bf76c-bc72-4834-9caa-350c3a6a1d61</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/User/Invalid Login Data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>4d2bf76c-bc72-4834-9caa-350c3a6a1d61</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>bc267807-e647-4c9b-817e-7c20992d2313</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4d2bf76c-bc72-4834-9caa-350c3a6a1d61</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>91dbd4b9-fbcf-4249-ad7b-3b0f4b965dd0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4d2bf76c-bc72-4834-9caa-350c3a6a1d61</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>error_message</value>
         <variableId>c56f5d01-2f85-4834-b5d0-11654cd6ab2a</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>29bcf8bf-45e4-490e-9345-193be7ad38b2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Login Invalid Format Email</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3a14b936-5810-44d5-b0c7-5de1947842c3</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/User/Invalid Format Email</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3a14b936-5810-44d5-b0c7-5de1947842c3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>6e69bcf8-27b7-4494-8f2c-c7e990aa8bf2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3a14b936-5810-44d5-b0c7-5de1947842c3</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>07911f0d-7149-4916-ba07-b751a0122b39</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>c4864272-8bdd-4f91-bbb7-8f76abcf89d6</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Login Valid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>b0ead12d-66cf-41fb-a2e7-56859d42a67e</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/User/Login/Logout Valid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
