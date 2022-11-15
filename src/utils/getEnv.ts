interface __json {
  dev: string
  test: string
  prod: string
}

export default (json: __json, href: string = window.location.href): string => {
  if (href.includes('//localhost')) return json['dev']
  if (href.includes('//dev.defed')) return json['test']
  if (href.includes('//test.defed')) return json['test']
  if (href.includes('//dev-blog.defed')) return json['test']
  if (href.includes('//test-blog.defed')) return json['test']
  return json['prod']
}
