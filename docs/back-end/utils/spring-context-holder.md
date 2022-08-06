# SpringContextHolder
获取spring容器中的bean

## getApplicationContext
```java
/**
 * 获取 ApplicationContext
 *
 * @return ApplicationContext
 */
public static ApplicationContext getApplicationContext()
```

## getBean(beanName)
```java
/**
 * 通过name获取Bean
 *
 * @param beanName class
 * @return bean
 */
public static <T> T getBean(String beanName)
```

## getBean(requiredType)
```java
/**
 * 通过Class获取Bean
 *
 * @param requiredType class
 * @return bean
 */
public static <T> T getBean(Class<T> requiredType)
```