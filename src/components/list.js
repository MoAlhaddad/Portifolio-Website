import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, children })
    return (
        <Box
          as="ui"
          sx={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              ...parentStyle
          }}
    >
    {/* icon, text, isAvailable */}
      {items.map((item) => (
          <Flex
             className={item.isAvailable ? 'open' : 'closed'}
             as="li"
             sx={{ ...childStyle}}
             key={i}
          >
            <IconButton sx={styles.listIcon} aria-label="list icon">
                {item.icon}
            </IconButton>
            {item.text}
          </Flex>
      ))}
    </Box>
    );
 
