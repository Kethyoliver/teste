import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        alignItems: "center",
        width: "48%",
        margin: 5,
        borderRadius: 30,
        padding: 5,
    },
    tituloCard: {
        height: 35,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "#C7830D",
        padding: 3,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
        padding: 2,
        paddingVertical: 5,
    },
    imgProd: {
        borderRadius: 5,
        height: 150,
        width: 200,
    },
    // Estilos do Modal
    imgModal: {
        borderRadius: 15,
        height: 150,
        width: 170,
    }, 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#dcb5ac',
        borderRadius: 15,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#C7830D',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#F8D2C9',
    },
    textStyle: {
        color: "#C7830D",
        fontWeight: "bold",
        textAlign: "center",
    },
});
