import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setExpression(text)}
        value={expression}
        placeholder="Enter expression"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('*')}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={() => addToExpression('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.calcButton} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calcButton} onPress={clearExpression}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.clearHistoryButton} onPress={clearHistory}>
        <Text style={styles.clearHistoryText}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    fontSize: 18,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  calcButton: {
    width: 130,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f09a9d',
    borderRadius: 15,
    margin: 0,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    color: '#616161',
    marginBottom: 5,
  },
  clearHistoryButton: {
    padding: 10,
    backgroundColor: '#f44336',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  clearHistoryText: {
    color: 'white',
    fontSize: 16,
  },
  });


export default Calculator;
