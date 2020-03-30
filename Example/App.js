import React from 'react';
import { View, Text } from 'react-native';
import PhoneInput from '../src/PhoneInput/PhoneInput';

const App = () => {
	const styles = StyleSheet.create({
		container: {
			flex: 1
		}
	});

	return (
		<View style={styles.container}>
			<PhoneInput
				initialCountry={initialCountry} // type: String, Ex: 'us', Default: auto.
				label={label}
				labelTextColor={labelTextColor}
				inputPlaceholder={inputPlaceholder}
				inputPlaceholderColor={inputPlaceholderColor}
				inputTextColor={inputTextColor}
				autoFormat={autoFormat} // type: Bool, Default: true.
				// etc
			/>
		</View>
	);
};

export default App;
