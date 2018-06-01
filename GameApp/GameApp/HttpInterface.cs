using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace GameApp
{
    public class HttpInterface
    {
        private HttpClient _client;

        public HttpInterface(string baseAddress)
        {
            this._client = new HttpClient() {
                BaseAddress = new Uri(baseAddress)
            };
        }

        public async Task<T> MakeGetRequest<T>(string resource)
        {
            try
            {
                var request = new HttpRequestMessage()
                {
                    RequestUri = new Uri(_client.BaseAddress, resource),
                    Method = HttpMethod.Get
                };
                var response = await _client.SendAsync(request);
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    var responseString = await response.Content.ReadAsStringAsync();
                    var model = JsonConvert.DeserializeObject<T>(responseString);
                    return model;
                }
                else
                {
                    return default(T);
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
