/** 获取url字符串里面参数 */
export function getUrlParams(url: string): { [propName: string]: string } {
  const params: { [propName: string]: string } = {}; // 用于保存变量和值的Map对象
  const searchParams = new URLSearchParams(url.slice(url.indexOf('?') + 1)); // 将URL的查询参数解析为URLSearchParams对象
  // 遍历URLSearchParams对象，将变量和值存储到params中
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

/** 求字符串数组的最大公共前缀 */
export function longestCommonPrefix(strs: string): string {
  /*
        实现思路：
              1, 将数组中的第一项作为最长公共前缀的值，
              2，依次遍历数组中的其他的字符串，将当前的最长公共前缀和当前值进行比较
        */
  if (strs.length === 0 || !strs) {
    return '';
  }
  let prefix: string = strs[0];
  for (let index = 1; index < strs.length; index++) {
    // strs[index].indexOf(prefix) 只有等于零的时候，才说明当前最大公共前缀也是当前字符串的前缀
    while (strs[index].indexOf(prefix) !== 0) {
      // 如果最大公共前缀不在当前字符串的首部，去除最大公共前缀的末尾的值，继续比较
      prefix = prefix.substring(0, prefix.length - 1);
      // 最大公共前缀为‘’，说明没有最大公共前缀
      if (prefix === '') {
        return '';
      }
    }
  }
  return prefix;
}

/** 使用递归实现深拷贝 */
export function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    // 如果是基本类型或 null，则直接返回
    return obj;
  }
  if (Array.isArray(obj)) {
    // 如果是数组，则遍历数组，递归调用 deepCopy
    return obj.map(deepCopy) as any;
  }
  // 否则是普通对象，需要遍历对象的所有属性，递归调用 deepCopy
  const result = {} as T;
  for (const key in obj) {
    if (key) {
      result[key] = deepCopy(obj[key]);
    }
  }
  return result;
}

type VariableType =
  | '[object String]'
  | '[object Number]'
  | '[object Boolean]'
  | '[object Object]'
  | '[object Array]'
  | '[object Null]'
  | '[object Undefined]'
  | '[object Function]'
  | '[object Date]'
  | '[object RegExp]'
  | '[object Map]'
  | '[object Set]';
/** 判断变量的类型，本质上是通过Object.prototype.toString.call方法，结局typeof判断不准的问题 */
export function checkVariableType<T>(params: T): VariableType {
  return Object.prototype.toString.call(params) as VariableType;
}

/** 防抖 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(func: Function, delay: number) {
  let timer: NodeJS.Timeout | undefined;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/** 节流函数 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(func: Function, delay: number) {
  let timer: NodeJS.Timeout | undefined;
  return (...args: unknown[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
}

// interface TreeNode {
//   [key: string]: any;
//   children?: TreeNode;
// }
// /**
//  * 将一个列表转化为树形结构
//  * @param list 包含所有节点的列表
//  * @param key 节点的标识
//  * @param parentKey 父节点标识
//  * @returns 节点列表
//  */
// export function listToTree<T extends Record<string, any>>(
//   list: TreeNode[],
//   key: keyof TreeNode,
//   parentKey: string,
// ) {
//   const tree: TreeNode = {};

//   const map: TreeNode = {};
//   list.forEach((item) => {
//     map[item[key]] = {
//       ...item,
//       children: [],
//     };
//   });

//   Object.keys(map).forEach((key) => {
//     const node = map[key];
//   });
// }
