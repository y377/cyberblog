module AllTagsFilter
  include Liquid::StandardFilters

  def all_tags(posts)
    counts = Hash.new(0) # 使用 Hash.new(0) 初始化哈希表，避免检查 nil

    # 使用 flat_map 避免嵌套的数组
    tags = posts.flat_map { |post| post['tags'] || [] }

    # 使用 each_with_object 来更新哈希表的计数
    tags.each_with_object(counts) { |tag, hash| hash[tag] += 1 }

    # 使用 select 替代 reject，更直观
    tags = counts.keys.select { |t| !t.empty? }

    # 使用 sort_by 进行排序，更简洁
    tags.sort_by { |tag| -counts[tag] }
         .map { |tag| { 'name' => tag, 'count' => counts[tag] } }
         .each do |tag_info|
           generate_tag_file(tag_info['name']) # 调用生成标签文件的方法
         end
  end
end

Liquid::Template.register_filter(AllTagsFilter)

def generate_tag_file(tag)
  File.open("_tags/#{tag}.md", "wb") do |file|
     file << "---\nlayout: tags\ntag-name: #{tag}\n---\n"
  end
end
