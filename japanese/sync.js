// ============================================================
//  云同步配置 —— 把你的两个值填到下面引号里
// ============================================================
//  1. SUPABASE_URL：https://ngpyaganbzdkduzrvcdl.supabase.co
//  2. SUPABASE_ANON_KEY：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncHlhZ2FuYnpka2R1enJ2Y2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTIyNjksImV4cCI6MjA5NjMyODI2OX0.eDvfU0GD46rDK571SnaFnDIqTDZUxpB11HigDv11vwU
//  两个都填对后，云同步才会生效；留空则自动退回纯本地模式。
// ------------------------------------------------------------
const SUPABASE_URL  = "https://ngpyaganbzdkduzrvcdl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncHlhZ2FuYnpka2R1enJ2Y2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTIyNjksImV4cCI6MjA5NjMyODI2OX0.eDvfU0GD46rDK571SnaFnDIqTDZUxpB11HigDv11vwU";
// ============================================================

const CLOUD_ON = SUPABASE_URL.startsWith("http") && SUPABASE_ANON_KEY.length > 20;

// 云端读：GET 一行
async function cloudGet(key){
  if(!CLOUD_ON) return null;
  try{
    const r = await fetch(`${SUPABASE_URL}/rest/v1/kv_store?key=eq.${encodeURIComponent(key)}&select=value`,{
      headers:{ apikey:SUPABASE_ANON_KEY, Authorization:`Bearer ${SUPABASE_ANON_KEY}` }
    });
    if(!r.ok) return null;
    const rows = await r.json();
    return rows.length ? rows[0].value : null;
  }catch(e){ return null; }
}

// 云端写：upsert 一行
async function cloudSet(key,value){
  if(!CLOUD_ON) return false;
  try{
    const r = await fetch(`${SUPABASE_URL}/rest/v1/kv_store?on_conflict=key`,{
      method:"POST",
      headers:{
        apikey:SUPABASE_ANON_KEY, Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type":"application/json", Prefer:"resolution=merge-duplicates"
      },
      body:JSON.stringify({ key, value, updated_at:new Date().toISOString() })
    });
    return r.ok;
  }catch(e){ return false; }
}

// 统一存储接口：本地+云端双写，优先云端读
const Store = {
  cloudEnabled: CLOUD_ON,
  // 读：先尝试云端，云端没有/失败则用本地
  async load(key){
    const cloud = await cloudGet(key);
    if(cloud !== null){
      // 顺便把云端数据缓存到本地，离线也能用
      try{ localStorage.setItem(key, JSON.stringify(cloud)); }catch(e){}
      return cloud;
    }
    try{
      const local = localStorage.getItem(key);
      return local ? JSON.parse(local) : null;
    }catch(e){ return null; }
  },
  // 写：本地立即写（快、可靠），云端后台写（同步）
  save(key, obj){
    try{ localStorage.setItem(key, JSON.stringify(obj)); }catch(e){}
    cloudSet(key, obj); // 不 await，后台进行，不卡界面
  }
};
