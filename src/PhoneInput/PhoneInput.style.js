import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	inputLabel: {
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	inputContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		alignItems: 'center'
	},
	countryCode: {
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderRadius: 3
	},
	input: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingLeft: 10,
		paddingVertical: 10,
		width: '100%'
	}
});

export { styles, width, height };
