# React Bootstrap Component - Alert

A React Bootstrap Component - Alert with Minimal Props

## Installation

Run the following command to install this package.

```bash
# If you use npm:
npm install react-rbc-alert

# Or if you use Yarn:
yarn add react-rbc-alert
```

## Usage

Here is a example of react-rbc-alert being used in React with hooks:

```jsx
import React, { useState } from "react";
import Alert from "react-rbc-alert";

const App = () => {
  const [displayAlert, setDisplayAlert] = useState(true);

  return (
    <div>
      <Alert
        showAlert={displayAlert}
        showHeader
        headerContent='Test Heading'
        bodyContent='0123456789'
        variantOverride='primary'
        showDismissible
        handleOnClose={() => setDisplayAlert(false)}
      />
    </div>
  );
};
```

## Documentation

Coming soon!

## API

| Name            | Type       | Default | Description                                    |
| --------------- | ---------- | ------- | ---------------------------------------------- |
| showAlert       | boolean    | false   | Controls the visual state of the Alert.        |
| showHeader      | boolean    | false   | Controls the visual state of the Alert Header. |
| showDismissible | boolean    | false   | Renders a properly aligned dismiss button      |
| handleOnClose   | function() | -       | Callback fired when alert is closed.           |
| bodyContent     | string     | -       | Render Alert Body Content                      |
| headerContent   | string     | -       | Render Alert Header Content                    |
| variantOverride | string     | primary | The Alert visual variant                       |
| keyOverride     | number     | 0       | Render Alert Index                             |

# Connect with us

Follow us on [Twitter](https://twitter.com/rajiii4u)
