import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const addToExpression = (text) => {
    setExpression((prev) => prev + text);
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const res = eval(expression);
      setResult(res.toString());
      setHistory([...history, `${expression} = ${res}`]);
      setExpression('');
    } catch (error) {
      setResult('Error');
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingHorizontal: 10 }}
        onChangeText={(text) => setExpression(text)}
        value={expression}
        placeholder="Enter expression"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="7" onPress={() => addToExpression('7')} />
        <Button title="8" onPress={() => addToExpression('8')} />
        <Button title="9" onPress={() => addToExpression('9')} />
        <Button title="+" onPress={() => addToExpression('+')} />
      </View>
      {/* Include similar rows for other buttons */}
      <Button title="Calculate" onPress={calculateResult} />
      <Button title="Clear" onPress={clearExpression} />
      <Text>Result: {result}</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', alignItems: 'center' }} onPress={clearHistory}>
        <Text style={{ color: 'white' }}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculator;
