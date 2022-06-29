import request from '@/utils/request';

// 保险百科
export async function getMessageList(id: string) {
  return request(`/wikis?type=${id}`, {
    method: 'get',
  });
}

export async function getMessageContent(id: string) {
  return request(`/item?id=${id}`, {
    method: 'get',
  });
}
