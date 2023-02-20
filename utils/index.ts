/** 获取url字符串里面参数 */
export function getUrlParams(url: string): {[propName: string]:  string} {
      let params: {[propName: string]:  string} = {}; // 用于保存变量和值的Map对象
      const searchParams = new URLSearchParams(url.slice(url.indexOf('?') + 1)) // 将URL的查询参数解析为URLSearchParams对象
      // 遍历URLSearchParams对象，将变量和值存储到params中
      searchParams.forEach((value, key) => {
            params[key] = value
      })
      return params
}
