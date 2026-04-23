import { View } from "react-native";
import { PostItem } from "../src/components/PostItem";

export default function App() {
    return (
        <View className="flex-1 bg-gray-100 p-4">
            <PostItem post={{
                id: 1,
                title: 'Example Post',
                content: 'This is an example post.',
                material: 'PLA',
                model3dUrl: 'https://example.com/model3d',
                createdAt: new Date()
            }} onDelete={function (id: number): void {
                throw new Error('Function not implemented.');
            } } />
        </View>
    );
}
