import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Ir ao Supermercado', completed: false },
    { id: '2', title: 'Estudar React Native', completed: false },
    { id: '3', title: 'Fazer exercícios', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Math.random().toString(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <Button title="Apagar" onPress={() => deleteTask(item.id)} color="red" />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova Tarefa"
        value={newTask}
        onChangeText={setNewTask}
        onSubmitEditing={addTask}
      />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
});