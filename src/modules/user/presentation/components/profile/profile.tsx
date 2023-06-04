import { Avatar, Text, View } from '@core/presentation/components';

export const Profile = () => {
  return (
    <View px={4} pt={8} flexDirection="row" alignItems="center" gap={4}>
      <Avatar
        source={{
          uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        }}
      />
      <View>
        <Text variant="title">Hi, João</Text>
        <Text variant="caption2" color="gray">
          Welcome back
        </Text>
      </View>
    </View>
  );
};
