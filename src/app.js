import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import LibraryList from './components/libraryList';


const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header title="Tech Stack"/>
            <LibraryList />
        </View>
    </Provider>
);

export default App;