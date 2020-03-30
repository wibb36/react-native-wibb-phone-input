import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './InputPhone.style';

const PhoneInput = () => {
	return (
		<View style={[ styles.container, style ]}>
			<View style={[ style.inputContainer, { borderBottomColor: inputBorderBottomColor } ]}>
				<View style={styles.countryCode} onPress={onPress}>
					<Text style={{ fontWeight: 'bold', color: colors.text }}>+1</Text>
				</View>
				<TextInput
					style={[ styles.input, { color: textColor } ]}
					label="Phone number"
					keyboardType="phone-pad"
					editable={true}
					textContentType="telephoneNumber"
					autoCorrect={false}
					value={formattedNumber}
					secureTextEntry={false}
					keyboardAppearance={theme === DarkTheme ? 'dark' : 'light'}
				/>
			</View>
			<Text style={styles.hint}>A verification code will be sent to this number.</Text>
		</View>
	);
};

export default PhoneInput;
