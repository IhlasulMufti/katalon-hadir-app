import java.text.SimpleDateFormat as SimpleDateFormat
import java.util.Date as Date
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys
import customKeywords.CustomUtils as Utils

WebUI.navigateToUrl(GlobalVariable.user_Url)

WebUI.setText(findTestObject('User/Login Page/input_Email'), email)

WebUI.setText(findTestObject('User/Login Page/input_Password'), password)

WebUI.click(findTestObject('User/Login Page/button_Masuk'))

WebUI.click(findTestObject('User/Absent/button_Clocking_In'))

WebUI.delay(2)

String currentTime = new SimpleDateFormat('HH:mm').format(new Date())

def clockingTime = WebUI.getAttribute(findTestObject('User/Absent/input_Time'), 'value')

Utils.verifyTextContains(clockingTime, currentTime, true)

WebUI.click(findTestObject('User/Absent/input_Absent_Type'))

WebUI.click(findTestObject('User/Absent/li_Absent_Type'))

WebUI.setText(findTestObject('User/Absent/input_Clocking_In_Notes'), note)

WebUI.click(findTestObject('User/Absent/button_Submit_Clocking_In'))

WebUI.scrollToElement(findTestObject('User/Absent/p_Absent_History'), 5)

String currentDate = new SimpleDateFormat('dd MMMM yyyy').format(new Date())

WebUI.delay(2)

def successClockingDate = WebUI.getText(findTestObject('User/Absent/p_Success_Absent_Date'))

def successClockingTime = WebUI.getText(findTestObject('User/Absent/p_Success_Absent_Time'))

def successClockingNote = WebUI.getText(findTestObject('User/Absent/p_Success_Absent_Note'))

Utils.verifyTextContains(successClockingDate, currentDate, true)

Utils.verifyTextContains(successClockingTime, currentTime, true)

Utils.verifyTextContains(successClockingNote, note, true)

