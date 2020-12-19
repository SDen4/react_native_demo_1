import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
}

export default function App() {
    const [isReady, setIsReady] = useState(false); //state for async load of the app

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    );
}
