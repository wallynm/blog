const textColor = {
  default: 'text-blue-800 dark:text-blue-300',
  dark: 'text-gray-800 dark:text-gray-300',
  red: 'text-red-800 dark:text-red-300',
  green: 'text-green-800 dark:text-green-300',
  yellow: 'text-yellow-800 dark:text-yellow-300',
  indigo: 'text-indigo-800 dark:text-indigo-300',
  purple: 'text-purple-800 dark:text-purple-300',
  pink: 'text-pink-800 dark:text-pink-300',
}

const backgroundColor = {
  default: 'bg-blue-100 dark:bg-blue-900',
  dark: 'bg-gray-100 dark:bg-gray-700',
  red: 'bg-red-100 dark:bg-red-900',
  green: 'bg-green-100 dark:bg-green-900',
  yellow: 'bg-yellow-100 dark:bg-yellow-900',
  indigo: 'bg-indigo-100 dark:bg-indigo-900',
  purple: 'bg-purple-100 dark:bg-purple-900',
  pink: 'bg-pink-100 dark:bg-pink-900',
}

export const getBackgroundBasedIntoLength = (category:string) => {
  const length = category.length
  if(!length) return backgroundColor.default;
  return backgroundColor[Object.keys(backgroundColor)[(length % 8) + 1]];
}

export const getColorBasedIntoLength = (category:string) => {
  const length = category.length
  if(!length) return textColor.default;
  return textColor[Object.keys(textColor)[(length % 8) + 1]];
}