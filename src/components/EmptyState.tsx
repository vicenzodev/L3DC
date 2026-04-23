import React from 'react';
import { View, Text } from 'react-native';

export function EmptyState() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#888' }}>Ainda não há nenhuma postagem 🧹</Text>
        </View>
    );
}