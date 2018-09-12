# React i18n Typescript Helper

Set of helpers to work with [react-i18next](https://github.com/i18next/react-i18next) in Typescript.

## Installation

Using npm:

```
npm i -S @dokuhero/react-18n-ts-helper
```

or yarn:

```
yarn add @dokuhero/react-18n-ts-helper
```

## Usage

### Translate HOC

```typescript
import { withLocale } from '@dokuhero/react-18n-ts-helper'

interface TheComponentProps {
  // ... your props
}

const TheComponent = withLocale<TheComponentProps>('namespace')(({ t }) => (
  <div>{t('say-hello')}</div>
))
```

### Translate Class Decorator

```typescript
import { withLocaleClass, WithLocaleProps } from '@dokuhero/react-18n-ts-helper'

interface TheComponentProps extends WithLocaleProps {
  // ... your props
}

@withLocaleClass('common')
class TheComponent extends React.Component<TheComponentProps> {
  render() {
    const { t } = this.props
    return <div>{t('say-hello')}</div>
  }
}
```

## License

MIT
