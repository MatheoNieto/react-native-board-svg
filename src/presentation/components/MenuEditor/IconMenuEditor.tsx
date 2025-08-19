import {
  BaseTouchable,
  Box,
  Icon,
  IconProps,
  Text,
} from '@presentation/ui/components';
import React from 'react';

type IconMenuEditorProps = IconProps & {
  nameIcon: any;
  onPress?: () => void;
  title?: string;
};

const IconMenuEditor: React.FC<IconMenuEditorProps> = ({
  nameIcon,
  title,
  onPress,
  disabled = true,
  ...rest
}) => {
  return (
    <Box
      p="m"
      as={BaseTouchable}
      alignItems="center"
      justifyContent="center"
      width={100}
      onPress={() => onPress && !disabled && onPress()}>
      <Icon
        as={nameIcon}
        {...rest}
        color={disabled ? 'grayIcon' : 'black'}
        size={25}
      />
      <Text>{title}</Text>
    </Box>
  );
};

export default IconMenuEditor;
