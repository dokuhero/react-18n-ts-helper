import {
  InjectedI18nProps,
  InjectedTranslateProps,
  translate
} from 'react-i18next'

export type WithLocaleProps = InjectedI18nProps & InjectedTranslateProps

type WithLocalComponentFactory<TProps> = (
  component: (
    props: TProps & WithLocaleProps
  ) => React.ReactElement<TProps> | null
) => React.ComponentType<TProps>

/**
 * Convenience of translate HOC function.
 * @param namespaces
 */
export function withLocale<TProps>(
  namespaces: string | string[]
): WithLocalComponentFactory<TProps> {
  return translate(namespaces, { wait: true }) as any
}

/**
 * The translate HOC function as class decorator.
 * @param namespaces
 */
export function withLocaleClass(namespaces: string | string[]) {
  return translate(namespaces, { wait: true }) as ClassDecorator
}
