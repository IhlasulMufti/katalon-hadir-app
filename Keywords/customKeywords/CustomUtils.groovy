package customKeywords

import com.kms.katalon.core.util.KeywordUtil

class CustomUtils {
	/**
	 * Verify if the actual string contains the expected substring
	 * @param actualText The actual text retrieved
	 * @param expectedSubstring The substring to check for
	 * @param stopOnFailure Whether to stop execution on failure
	 */
	static void verifyTextContains(String actualText, String expectedSubstring, boolean stopOnFailure) {
		if (actualText.contains(expectedSubstring)) {
			KeywordUtil.markPassed("Verification passed: '${actualText}' contains '${expectedSubstring}'.")
		} else {
			KeywordUtil.markFailedAndStop("Verification failed: '${expectedSubstring}' not found in '${actualText}'.")
		}
	}
}