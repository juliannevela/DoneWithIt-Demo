import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import ListItem from '../components/lists/Item';
import DeleteAction from '../components/lists/DeleteAction';
import Separator from '../components/lists/Separator';
import Screen from '../components/Screen';

const InitialMessages = [
    {
        id: 1,
        title: 'I love you...',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste tenetur expedita non repellendus. Delectus, odio exercitationem quisquam eos quo, mollitia distinctio sapiente inventore quibusdam eius dolorem! Voluptate, velit at.',
        image: require('../assets/nessima.png'),
    },
    {
        id: 2,
        title: 'I know',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta quidem iusto accusamus voluptates consequatur minima reiciendis ab nesciunt sapiente minus sequi tenetur, eaque sunt neque? Excepturi accusamus facere officia.',
        image: require('../assets/TBTCheers.png'),
    },
];

export default function Messages() {
    const [messages, setMessages] = useState(InitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await setMessages([
            {
                id: 2,
                title: 'This is the way',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: require('../assets/mosh.jpg'),
            },
        ]);
        setRefreshing(false);
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log('Pressed: ', item)}
                        renderRightActions={() => (
                            <DeleteAction onPress={() => handleDelete(item)} />
                        )}
                        showChevrons
                        title={item.title}
                    />
                )}
                ItemSeparatorComponent={Separator}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        enabled={true}
                        onRefresh={onRefresh}
                    />
                }
            />
        </Screen>
    );
}
