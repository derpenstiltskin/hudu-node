<a name="Hudu"></a>

## Hudu
Class representing a Hudu API wrapper instance

**Kind**: global class  

* [Hudu](#Hudu)
    * [new Hudu(config)](#new_Hudu_new)
    * [.activity_logs(method, options)](#Hudu+activity_logs) ⇒ <code>Promise</code>
    * [.api_info(method, options)](#Hudu+api_info) ⇒ <code>Promise</code>
    * [.articles(method, options)](#Hudu+articles) ⇒ <code>Promise</code>
    * [.asset_layouts(method, options)](#Hudu+asset_layouts) ⇒ <code>Promise</code>
    * [.asset_passwords(method, options)](#Hudu+asset_passwords) ⇒ <code>Promise</code>
    * [.assets(method, options)](#Hudu+assets) ⇒ <code>Promise</code>
    * [.companies(method, options)](#Hudu+companies) ⇒ <code>Promise</code>
    * [.expirations(method, options)](#Hudu+expirations) ⇒ <code>Promise</code>
    * [.folders(method, options)](#Hudu+folders) ⇒ <code>Promise</code>
    * [.magic_dash(method, options)](#Hudu+magic_dash) ⇒ <code>Promise</code>
    * [.procedures(method, options)](#Hudu+procedures) ⇒ <code>Promise</code>
    * [.relations(method, options)](#Hudu+relations) ⇒ <code>Promise</code>
    * [.websites(method, options)](#Hudu+websites) ⇒ <code>Promise</code>

<a name="new_Hudu_new"></a>

### new Hudu(config)
Creates a Hudu API wrapper instance


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | The configuration object to connect to a Hudu API instance |
| config.host | <code>string</code> | The string containing the hostname for a Hudu API instance |
| config.key | <code>string</code> | The string containing the API key for a Hudu API instance |
| [config.port] | <code>number</code> | The optional number containing a port number if the Hudu API is not running on TCP port 443 |

<a name="Hudu+activity_logs"></a>

### hudu.activity\_logs(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu activity_logs endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+api_info"></a>

### hudu.api\_info(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu api_info endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+articles"></a>

### hudu.articles(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu articles endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+asset_layouts"></a>

### hudu.asset\_layouts(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu asset_layouts endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+asset_passwords"></a>

### hudu.asset\_passwords(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu asset_passwords endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+assets"></a>

### hudu.assets(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu assets endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+companies"></a>

### hudu.companies(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu companies endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+expirations"></a>

### hudu.expirations(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu expirations endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+folders"></a>

### hudu.folders(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu folders endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+magic_dash"></a>

### hudu.magic\_dash(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu magic_dash endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+procedures"></a>

### hudu.procedures(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu procedures endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+relations"></a>

### hudu.relations(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu relations endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

<a name="Hudu+websites"></a>

### hudu.websites(method, options) ⇒ <code>Promise</code>
Sends API request to the Hudu websites endpoint

**Kind**: instance method of [<code>Hudu</code>](#Hudu)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | String containing type of API request |
| options | <code>object</code> | Configuration object for the API request |

