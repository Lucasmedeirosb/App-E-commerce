// Importe as bibliotecas necessárias
import React, { useState } from 'react';
import { Box, Input, Button, Heading, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export function PaymentScreen({ route }) {
  const { equipmentId } = route.params;
  const { navigate } = useNavigation();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    // Implemente aqui a lógica de pagamento, chamando a API de pagamento, etc.
    // Lembre-se de adicionar a lógica de tratamento de erros e sucesso.

    // Exemplo básico:
    console.log('Processando pagamento...');
    console.log('Número do cartão:', cardNumber);
    console.log('Data de validade:', expiryDate);
    console.log('CVC:', cvc);

    // Após o pagamento bem-sucedido, você pode navegar para a página de confirmação ou outra tela.
    navigate('PaymentConfirmation', { equipmentId });
  };

  return (
    <Box flex="1" padding="20px">
      <Heading mb="4">Payment Details</Heading>

      {/* Inputs para o número do cartão, data de validade e CVC */}
      <Input
        mb="2"
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <Input
        mb="2"
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={(text) => setExpiryDate(text)}
      />
      <Input
        mb="4"
        placeholder="CVC"
        value={cvc}
        onChangeText={(text) => setCvc(text)}
      />

      {/* Botão para processar o pagamento */}
      <Button onPress={handlePayment} mb="4">
        Process Payment
      </Button>

      {/* Mensagem de confirmação (pode ser removida ou substituída por uma página de confirmação real) */}
      <Text color="green.500">Payment processed successfully!</Text>
    </Box>
  );
}
