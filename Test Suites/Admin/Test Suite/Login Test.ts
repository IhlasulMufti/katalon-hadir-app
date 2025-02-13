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
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>b2946dac-97a9-43f2-8d55-944809f597db</testSuiteGuid>
   <testCaseLink>
      <guid>b6025b38-e13c-4130-9d94-904cd69ab610</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Login Valid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>e9804ecb-edb3-4943-8510-3f6ae38e41d2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Login Invalid</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>1859dca6-1777-41c7-8725-e33b9fdd952d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Invalid Login Data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>1859dca6-1777-41c7-8725-e33b9fdd952d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>2373d6da-c13e-4463-b283-d79adcc95f1a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>1859dca6-1777-41c7-8725-e33b9fdd952d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>e2078ecd-64dc-4acc-9822-edf3d53583cb</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>1859dca6-1777-41c7-8725-e33b9fdd952d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>error_message</value>
         <variableId>a2e366cb-eb67-4fc7-b5de-ca662a205224</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>aabf779d-1bb7-47c3-99a2-cbd815aeea69</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Login Invalid Format Email</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>591f6fc7-2602-4b3e-9ef9-fbfa4601c1f6</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Invalid Format Email</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>591f6fc7-2602-4b3e-9ef9-fbfa4601c1f6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>8f31f6da-37e5-4798-9c6f-e86138c181e0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>591f6fc7-2602-4b3e-9ef9-fbfa4601c1f6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>c0963f46-6c35-4e7e-be58-b4f280c50618</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>591f6fc7-2602-4b3e-9ef9-fbfa4601c1f6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>url</value>
         <variableId>104ec392-2683-46b8-90cc-282c1f6f1300</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>3a76e95a-9ba8-425e-a5a7-4d0e25da3a82</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Password Masking On</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>2ae42e22-101b-4f43-b7d6-2d025439c270</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Password Masking Off</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>f7f53338-95e4-44ab-82e8-1c896b649917</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Admin/Login/Logout Valid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
