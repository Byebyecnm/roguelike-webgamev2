// ==== DATA ====

const characters = [
  { name:"Frieren", img:"images/characters/frieren.png",
    hp:85, mana:200, ad:20, ap:65, armor:30, mr:45,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.7, skillCost:20,
    passive:{ icon:"images/passives/frierenPassive.png", text:"Büyü hasarı %20 artar." }
  },
  { name:"Fern", img:"images/characters/fern.png",
    hp:75, mana:150, ad:20, ap:55, armor:30, mr:35,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.6, skillCost:25,
    passive:{ icon:"images/passives/fernPassive.png", text:"Mana harcaması %20 azalır." }
  },
  { name:"Levi", img:"images/characters/levi.png",
    hp:90, mana:25, ad:70, ap:20, armor:45, mr:20,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.5, skillCost:20,
    passive:{ icon:"images/passives/leviPassive.png", text:"İlk kritik vurduğunda kritik şansı %10 artar." }
  },
  { name:"Eren", img:"images/characters/eren.png",
    hp:115, mana:25, ad:66, ap:25, armor:40, mr:30,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.4, skillCost:15,
    passive:{ icon:"images/passives/erenPassive.png", text:"Can azaldıkça hasar artar." }
  },
  { name:"Light Yagami", img:"images/characters/light.png",
    hp:95, mana:145, ad:20, ap:55, armor:35, mr:40,
    critChance: 15, critMult: 2.5, lifesteal: 0,
    skillMult:2.0, skillCost:35,
    passive:{ icon:"images/passives/lightPassive.png", text:"Skill ve normal saldırıları kritik vurabilir. Kritik vurduğunda düşmanın maksimum canının %5'i kadar ekstra hasar verir." }
  },
  { name:"Gojo Satoru", img:"images/characters/gojo.png",
    hp:80, mana:100, ad:40, ap:60, armor:30, mr:50,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.8, skillCost:35,
    passive:{ icon:"images/passives/gojoPassive.png", text:"İlk 3 düşman saldırısında aldığı hasar %50 azalır." }
  },
  { name:"Saitama", img:"images/characters/saitama.png",
    hp:150, mana:10, ad:100, ap:15, armor:60, mr:30,
    critChance: 0, critMult: 3.0, lifesteal: 0,
    skillMult:1.2, skillCost:5,
    passive:{ icon:"images/passives/saitamaPassive.png", text:"Normal saldırıları %20 ihtimalle anında düşmanı öldürür (Boss hariç)." }
  },
  { name:"Naruto", img:"images/characters/naruto.png",
    hp:100, mana:80, ad:55, ap:50, armor:40, mr:35,
    critChance: 0, critMult: 2.0, lifesteal: 0,
    skillMult:1.6, skillCost:25,
    passive:{ icon:"images/passives/narutoPassive.png", text:"HP %30'un altına düştüğünde tüm istatistikler %30 artar." }
  },
  { name:"Guts", img:"images/characters/guts.png",
    hp:130, mana:15, ad:75, ap:20, armor:55, mr:20,
    critChance: 0, critMult: 2.2, lifesteal: 0,
    skillMult:1.3, skillCost:10,
    passive:{ icon:"images/passives/gutsPassive.png", text:"Her vuruşta %5 ihtimalle öfke moduna girer ve 3 tur boyunca hasar %40 artar." }
  },
  { name:"Kara Kedi", img:"images/characters/karakedi.png",
    hp:90, mana:100, ad:75, ap:0, armor:40, mr:35,
    critChance: 0, critMult: 2.2, lifesteal: 0,
    skillMult:1.3, skillCost:100,
    passive:{ icon:"images/passives/karakediPassive.png", text:"KEDİ KLİZİM! Bir koridoru komple yok ederim." }
  },
];

const companions = [
  { name:"Himmel", img:"images/characters/himmel.png",
    bonus:{ type:"ad", value:35, text:"Saldırı Gücü +35" }
  },
  { name:"Maomao", img:"images/characters/maomao.png",
    bonus:{ type:"heal", value:20, text:"Her turda +20 HP rejenerasyon" }
  },
  { name:"Stark", img:"images/characters/stark.png",
    bonus:{ type:"crit", value:10, text:"Kritik şansı +10%" }
  },
  { name:"Komutan Erwin", img:"images/characters/erwin.png",
    bonus:{ type:"strategy", value:20, text:"Tüm istatistikler +20%" }
  },
  { name:"Mikasa Ackerman", img:"images/characters/mikasa.png",
    bonus:{ type:"speed", value:25, text:"Saldırı başına %25 ihtimalle ekstra vuruş" }
  },
  { name:"L", img:"images/characters/l.png",
    bonus:{ type:"intelligence", value:25, text:"Yetenek Gücü +25 ve Skill maliyeti %20 azalır" }
  },
  { name:"Shinigami", img:"images/characters/shinigami.png",
    bonus:{ type:"death", value:10, text:"Düşman öldüğünde %20 HP ve Mana restore" }
  },
  { name:"Rock Lee", img:"images/characters/lee.png",
    bonus:{ type:"taijutsu", value:20, text:"Saldırı Gücü +25" }
  },
];

const shopItems = [
  { id:"hp_pot", name:"Can İksiri", img:"images/items/iksir.png", price:20, usable:true, stackable:true,
    desc:"35 HP restore eder.",
    use:()=>{ player.hp = Math.min(player.maxHp, player.hp + 35); } },
  { id:"mana_pot", name:"Mana İksiri", img:"images/items/manapot.png", price:20, usable:true, stackable:true,
    desc:"40 Mana restore eder.",
    use:()=>{ player.mana = Math.min(player.maxMana, player.mana + 40); } },
  { id:"staff", name:"Luden", img:"images/items/luden.png", price:175, usable:false,
    desc:"Yetenek Gücü +40 verir.",
    passive:()=>{ player.ap += 40; } },
  { id:"sword", name:"Ölüm Kılıcı", img:"images/items/deathblade.png", price:280, usable:false,
    desc:"Saldırı Gücü +85 verir.",
    passive:()=>{ player.ad += 75; } },
  { id:"armor", name:"Muhafızın Adağı", img:"images/items/protector.png", price:230, usable:false,
    desc:"Zırh ve Büyü Direncine +25 verir. Maksimum Mana +25 artırır.",
    passive:()=>{ player.armor += 15; player.maxMana+=25; player.mr+=25; } },
  { id:"crit_item", name:"Infinity Edge", img:"images/items/infinity.png", price:225, usable:false,
    desc:"Saldırı Gücün 35 artar. Kritik şansı +15% verir.",
    passive:()=>{ player.critChance += 15; player.ad +=35; } },
  { id:"armor+tear", name:"Ruh Gömleği", img:"images/items/ruhgomlek.png", price:280, usable:false,
    desc:"Zırh +15, Maksimum Mana +30 ve Maksimum Can +20 verir.",
    passive:()=>{ 
      player.armor += 15; 
      player.maxMana += 30; 
      player.mana += 30;
      player.maxHp += 20;
      player.hp += 20;
    } },
  { id:"vampiric", name:"Kanlı Kılıç", img:"images/items/vampiric.png", price:300, usable:false,
    desc:"Can Çalma +20% verir.",
    passive:()=>{ player.lifesteal += 0.2; } },
  { id:"warmog", name:"Warmog's Armor", img:"images/items/warmog.png", price:300, usable:false,
    desc:"Maksimum Can +60 verir ve her tur başında +10 HP rejenerasyon.",
    passive:()=>{ 
      player.maxHp += 60; 
      player.hp += 60;
      player.warmog = true;
    } },
  { id:"rabadons", name:"Rabadonun Şapkası", img:"images/items/rabadon.png", price:200, usable:false,
    desc:"Yetenek Gücü +55",
    passive:()=>{ 
      player.ap += 55;
      player.rabadon = true;
    } },
    { id:"kritap", name:"Mücevherli Eldiven", img:"images/items/kritap.png", price:175, usable:false,
    desc:"Büyü Hasarını 30 artırır ve Kritik Şansın 15 artar.",
    passive:()=>{ 
      player.ap += 25; 
      player.critChance += 20;
    } },
  { id:"thornmail", name:"Thornmail", img:"images/items/civili.png", price:200, usable:false,
    desc:"Zırh +35 verir ve aldığın hasarın %25'ini düşmana geri yansıtır.",
    passive:()=>{ 
      player.armor += 35;
      player.thornmail = 0.25;
    } },
    { id:"gargoyl", name:"Gargoylun Taşzırhı", img:"images/items/gargoyl.png", price:300, usable:false,
    desc:"Zırh ve Büyü Direnci 30 artırır. Her tur Zırh ve Büyü Direnci KALICI olarak 2 artar!",
    passive:()=>{ 
      player.armor += 30; 
      player.mr += 30;
      player.gargoyl = true;
    } },
    { id:"titan", name:"Titanın Azmi", img:"images/items/titan.png", price:300, usable:false,
    desc:"AD ve AP 15 artırır. Her tur AD ve AP KALICI olarak 2 artar!",
    passive:()=>{ 
      player.ad += 15; 
      player.ap += 15;
      player.titan = true;
    } },
        { id:"shojin", name:"Shojin'in Mızrağı", img:"images/items/shojin.png", price:300, usable:false,
    desc:"AD +5 ve AP +15 artırır. Mana ve Max Mana 20 ARTAR! Ayrıca her tur MANAN 10 artar!",
    passive:()=>{ 
      player.ad += 5;
      player.ap += 15;
      player.maxMana += 20; 
      player.mana += 20;
      player.shojin = true;
    } },
];

// Düşman tipleri (Daha çeşitli ve güçlü)
const enemyTypes = [
  // Fiziksel düşmanlar (AD)
  { name:"Goblin", hp:80, ad:20, ap:0, armor:12, mr:8, gold:25, img:"images/enemies/goblin.png", type:"physical" },
  { name:"Kobold", hp:70, ad:32, ap:0, armor:10, mr:10, gold:30, img:"images/enemies/kobold.png", type:"physical" },
  { name:"Ork Savaşçısı", hp:110, ad:48, ap:0, armor:22, mr:12, gold:35, img:"images/enemies/orkfighter.png", type:"physical" },
  { name:"Troll", hp:130, ad:64, ap:0, armor:28, mr:10, gold:38, img:"images/enemies/troll.png", type:"physical" },
  { name:"Kara Şövalye", hp:160, ad:70, ap:0, armor:38, mr:18, gold:45, img:"images/enemies/igris.png", type:"physical" },
  
  // Büyücü düşmanlar (AP)
  { name:"Büyücü", hp:90, ad:0, ap:52, armor:18, mr:45, gold:50, img:"images/enemies/wizard.png", type:"magic" },
  { name:"Ateş Elemental", hp:110, ad:0, ap:62, armor:22, mr:40, gold:70, img:"images/enemies/ates.png", type:"magic" },
  { name:"Antik Lich", hp:200, ad:0, ap:70, armor:35, mr:50, gold:95, img:"images/enemies/lich.png", type:"magic" },
  
  { name:"Muazzam Dev", hp:300, ad:50, ap:0, armor:60, mr:20, gold:80, img:"images/enemies/muazzamdev.png" },
  { name:"Zırhlı Dev", hp:250, ad:35, ap:0, armor:80, mr:40, gold:75, img:"images/enemies/zirhlidev.png" },
  { name:"Mana Sömürücü", hp:80, ad:0, ap:0, armor:15, mr:60, gold:55, img:"images/enemies/manasomuren.png", manaDrain:true },

  // Hibrit düşmanlar (AD + AP)
  { name:"Vampir Lord", hp:120, ad:55, ap:55, armor:24, mr:35, gold:60, img:"images/enemies/vampir.png", type:"hybrid" },
  { name:"Demon", hp:160, ad:75, ap:75, armor:32, mr:38, gold:75, img:"images/enemies/demon.png", type:"hybrid" },
  
  // Tank düşmanlar
  { name:"Golem", hp:360, ad:30, ap:0, armor:50, mr:15, gold:55, img:"images/enemies/golem.png", type:"physical" },
  { name:"Gargoyle", hp:225, ad:50, ap:50, armor:40, mr:28, gold:58, img:"images/enemies/gargoyle.png", type:"hybrid" },
  
  // Diğer düşmanlar
  { name:"Dev Örümcek", hp:200, ad:42, ap:25, armor:20, mr:22, gold:70, img:"images/enemies/spider.png", type:"hybrid" },
  { name:"Buz Devi", hp:200, ad:38, ap:49, armor:35, mr:25, gold:70, img:"images/enemies/icegolem.png", type:"hybrid" },
  { name:"Ejderha Yavrusu", hp:250, ad:80, ap:20, armor:38, mr:32, gold:80, img:"images/enemies/babyejder.png", type:"hybrid" },
  { name:"Kızıl Ejderha", hp:300, ad:80, ap:80, armor:45, mr:45, gold:130, img:"images/enemies/dracarys.png", type:"hybrid" },
];

// AUGMENT SİSTEMİ
const augments = {
  silver: [
    { id:"s1", name:"Prim", icon:"💰", desc:"65 altın kazan", 
      effect:()=>{ gold += 65; addLog("💰 +65 altın!"); } },
    { id:"s2", name:"Sağlık İksiri", icon:"❤️", desc:"Max HP +25", 
      effect:()=>{ player.maxHp += 25; player.hp += 25; addLog("❤️ Max HP +25!"); } },
    { id:"s3", name:"Mana Pınarı", icon:"💙", desc:"Max Mana +30", 
      effect:()=>{ player.maxMana += 30; player.mana += 30; addLog("💙 Max Mana +30!"); } },
    { id:"s4", name:"Keskin Bıçak", icon:"🗡️", desc:"Saldırı Gücü +30", 
      effect:()=>{ player.ad += 30; addLog("🗡️ Saldırı Gücü +30!"); } },
    { id:"s5", name:"Deri Zırh", icon:"🛡️", desc:"Zırh +20", 
      effect:()=>{ player.armor += 20; addLog("🛡️ Zırh +20!"); } },
    { id:"s6", name:"Şans Tılsımı", icon:"🍀", desc:"Kritik şansı +10%", 
      effect:()=>{ player.critChance += 10; addLog("🍀 Kritik şansı +10%!"); } },
  ],
  gold: [
    { id:"g1", name:"Altın Hazine", icon:"💎", desc:"100 altın kazan", 
      effect:()=>{ gold += 100; addLog("💎 +100 altın!"); } },
    { id:"g2", name:"Titan Kalbi", icon:"❤️", desc:"Max HP +50", 
      effect:()=>{ player.maxHp += 50; player.hp += 50; addLog("❤️ Max HP +50!"); } },
    { id:"g3", name:"Sihirli Kaynak", icon:"💙", desc:"Max Mana +50", 
      effect:()=>{ player.maxMana += 50; player.mana += 50; addLog("💙 Max Mana +50!"); } },
    { id:"g4", name:"Güç Taşı", icon:"⚔️", desc:"Saldırı Gücü +30", 
      effect:()=>{ player.ad += 30; addLog("⚔️ Saldırı Gücü +30!"); } },
    { id:"g5", name:"Ejderha Pulları", icon:"🛡️", desc:"Zırh +20, Büyü Direnci +15", 
      effect:()=>{ player.armor += 20; player.mr += 15; addLog("🛡️ Zırh +20, MR +15!"); } },
    { id:"g6", name:"Şans Yıldızı", icon:"✨", desc:"Kritik şansı +10%", 
      effect:()=>{ player.critChance += 10; addLog("✨ Kritik şansı +10%!"); } },
    { id:"g7", name:"Vampir Dişleri", icon:"🧛", desc:"Can Çalma +15%", 
      effect:()=>{ player.lifesteal += 0.15; addLog("🧛 Can Çalma +15%!"); } },
    { id:"g8", name:"Bedava Eşya", icon:"🎁", desc:"Rastgele bir eşya kazan", 
      effect:()=>{ 
        const item = shopItems[Math.floor(Math.random() * shopItems.length)];
        if (item.passive) { item.passive(); passiveItems.push(item); }
        else if (!inventory[item.id]) { inventory[item.id] = { item, count: 1 }; }
        else { inventory[item.id].count++; }
        renderInventory();
        addLog("🎁 " + item.name + " kazandın!"); 
      } },
  ],
  prismatic: [
    { id:"p1", name:"Kraliyet Hazinesi", icon:"👑", desc:"200 altın kazan", 
      effect:()=>{ gold += 200; addLog("👑 +200 altın!"); } },
    { id:"p2", name:"Ölümsüzlük", icon:"💚", desc:"Max HP +100 ve her tur +15 HP", 
      effect:()=>{ 
        player.maxHp += 100; 
        player.hp += 100; 
        player.prismaticRegen = 15;
        addLog("💚 Ölümsüzlük augmenti!"); 
      } },
    { id:"p3", name:"Sonsuz Mana", icon:"🔮", desc:"Max Mana +100 ve mana maliyeti %30 azalır", 
      effect:()=>{ 
        player.maxMana += 100; 
        player.mana += 100; 
        player.prismaticMana = 0.3;
        addLog("🔮 Sonsuz Mana augmenti!"); 
      } },
    { id:"p4", name:"Tanrı Gücü", icon:"⚡", desc:"Tüm hasarlar %40 artar", 
      effect:()=>{ 
        player.prismaticDamage = 0.4;
        addLog("⚡ Tanrı Gücü augmenti!"); 
      } },
    { id:"p5", name:"Kutsal Zırh", icon:"🌟", desc:"Aldığın tüm hasarlar %30 azalır", 
      effect:()=>{ 
        player.prismaticDefense = 0.3;
        addLog("🌟 Kutsal Zırh augmenti!"); 
      } },
    { id:"p6", name:"Kader", icon:"🎲", desc:"Kritik şansı +20% ve kritik hasarı 3x", 
      effect:()=>{ 
        player.critChance += 20; 
        player.critMult = 3.0;
        addLog("🎲 Kader augmenti!"); 
      } },
    { id:"p7", name:"Çift Saldırı", icon:"⚔️⚔️", desc:"Her saldırı iki kez vuruş yapar", 
      effect:()=>{ 
        player.doubleStrike = true;
        addLog("⚔️⚔️ Çift Saldırı augmenti!"); 
      } },
  ]
};

// Başarımlar
const achievements = [
  { id:"first_blood", name:"İlk Kan", desc:"İlk düşmanı öldür", reward:10, icon:"🩸", unlocked:false },
  { id:"survivor_10", name:"Hayatta Kalma", desc:"10 tur tamamla", reward:30, icon:"🏆", unlocked:false },
  { id:"survivor_25", name:"Deneyimli Savaşçı", desc:"25 tur tamamla", reward:50, icon:"🎖️", unlocked:false },
  { id:"rich", name:"Zengin", desc:"300 altın biriktir", reward:50, icon:"💰", unlocked:false },
  { id:"critical_master", name:"Kritik Usta", desc:"10 kritik vuruş yap", reward:5, icon:"💥", unlocked:false, critCount:0 },
  { id:"skill_master", name:"Büyü Ustası", desc:"20 skill kullan", reward:30, icon:"🔮", unlocked:false, skillCount:0 },
  { id:"tank", name:"Duvar", desc:"500 HP'ye ulaş", reward:40, icon:"🛡️", unlocked:false },
];

// ==== STATE ====

let player = null;
let lanes = [[], [], []]; // 3 koridor, her biri düşman dizisi
let selectedLane = 0; // Seçili koridor (0, 1, 2)
let gold = 100;
let inventory = {};
let passiveItems = [];
let purchasedItems = [];
let selectedAugments = []; // Seçilen augmentler

let currentTurn = 1;
let maxTurns = 50;
let companion = null;
let isDefending = false;
let leviCritTriggered = false;
let gojoHitsRemaining = 3; // Gojo pasifi
let berserkerTurnsLeft = 0; // Guts pasifi
let narutoRageActive = false; // Naruto pasifi

// Market sistemi
let shopCost = 0; // İlk market bedava
let lastFreeShopTurn = 0; // Son bedava market turu

let rerollUsed = [false, false, false];
let currentChoices = [];
let selectedIndex = null;

// ==== DOM ====

const loginScreen = document.getElementById("loginScreen");
const selectScreen = document.getElementById("characterSelectScreen");
const gameScreen = document.getElementById("gameScreen");

const cardRow = document.getElementById("cardRow");
const confirmBtn = document.getElementById("confirmBtn");


// ==== CHARACTER SELECT ====

function getRandomChar(exclude = []) {
  const pool = characters.filter(c => !exclude.includes(c));
  return pool[Math.floor(Math.random() * pool.length)];
}

function rollAll() {
  currentChoices = [];
  for (let i = 0; i < 3; i++) {
    if (currentChoices[i] === undefined) {
      currentChoices.push(getRandomChar(currentChoices));
    }
  }
  renderSelectCards();
}

function renderSelectCards() {
  cardRow.innerHTML = "";
  selectedIndex = null;
  confirmBtn.style.display = "none";

  currentChoices.forEach((c, i) => {
    const d = document.createElement("div");
    d.className = "charCard";
    d.innerHTML = `
      <img src="${c.img}">
      <div><b>${c.name}</b></div>
      <div class="charStats">HP:${c.hp} | Mana:${c.mana}</div>
      <div class="charStats">AD:${c.ad} | AP:${c.ap}</div>
      <button class="rerollCardBtn" data-index="${i}" ${rerollUsed[i] ? 'disabled' : ''}>
        ${rerollUsed[i] ? '❌' : '🔄'}
      </button>
    `;
    
    const card = d.querySelector('.charCard') || d;
    card.onclick = (e) => {
      if (e.target.classList.contains('rerollCardBtn')) return;
      document.querySelectorAll(".charCard").forEach(x => x.classList.remove("selected"));
      d.classList.add("selected");
      selectedIndex = i;
      confirmBtn.style.display = "block";
    };
    
    cardRow.appendChild(d);
  });

  document.querySelectorAll('.rerollCardBtn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      rerollCard(index);
    };
  });
}

function rerollCard(index) {
  if (rerollUsed[index]) return;
  
  rerollUsed[index] = true;
  currentChoices[index] = getRandomChar(currentChoices);
  renderSelectCards();
}

confirmBtn.onclick = () => {
  if (selectedIndex === null) return;
  startGame(currentChoices[selectedIndex]);
};

// ==== GAME START ====

function startGame(char) {
  resetGameStats();
  player = JSON.parse(JSON.stringify(char));
  player.maxHp = player.hp;
  player.maxMana = player.mana;
  player.baseAd = player.ad;
  player.baseAp = player.ap;
  player.lifesteal = 0;
  player.warmog = false;
  player.gargoyl = false;
  player.shojin = false;
  player.titan = false;
  player.rabadon = false;
  player.thornmail = 0;

  // ✅ YENİ: AP karakterler için pasif AD bonusu
  // AP karakterler: Frieren, Fern, Light, Gojo
  if (player.ap > player.ad) {
    // AP karakterler, AP'lerinin %30'u kadar AD bonusu alır
    player.ad += Math.floor(player.ap * 0.3);
    addLog(`✨ Büyücü karakteri! AP'den bonus AD: +${Math.floor(player.baseAp * 0.3)}`);
  }

  
  // Prismatik augment özellikleri
  player.prismaticRegen = 0;
  player.prismaticMana = 0;
  player.prismaticDamage = 0;
  player.prismaticDefense = 0;
  player.doubleStrike = false;

  selectScreen.classList.remove("active");
  gameScreen.classList.add("active");

  updateUI();
  renderFeatures();
  renderInventory();
  renderAchievements();
  startBattle();
  updateCharacterDrawerVisibility();
}

// ==== UI ====

function updateUI() {
  document.getElementById("portrait").src = player.img;
  document.getElementById("charName").textContent = player.name;

  document.getElementById("hpBar").style.width = (player.hp / player.maxHp * 100) + "%";
  document.getElementById("manaBar").style.width = (player.mana / player.maxMana * 100) + "%";

  document.getElementById("hpValueText").textContent = `Can: ${player.hp} / ${player.maxHp}`;
  document.getElementById("manaValueText").textContent = `Mana: ${player.mana} / ${player.maxMana}`;

  document.getElementById("statsText").innerHTML =
  `Saldırı Gücü: ${player.ad} | Yetenek Gücü: ${player.ap}<br>
   Kritik: %${player.critChance} | Can Çalma: %${Math.floor(player.lifesteal * 100)}<br>
   Zırh: ${player.armor} | Büyü Direnci: ${player.mr}`;
  document.getElementById("goldText").textContent = gold;
  document.getElementById("turnText").textContent = `Tur: ${currentTurn}/${maxTurns}`;
  
  // Dükkan butonu güncelle
  const shopBtn = document.getElementById("openShopBtn");
  let isFree = (currentTurn === 1) || (currentTurn - lastFreeShopTurn >= 5);
  
  if (isFree) {
    shopBtn.style.borderColor = "#4caf50";
    shopBtn.style.boxShadow = "0 2px 8px rgba(76, 175, 80, 0.6)";
    shopBtn.title = "Bedava Dükkan!";
  } else {
    shopBtn.style.borderColor = "#FFD700";
    shopBtn.style.boxShadow = "0 2px 8px rgba(194, 139, 75, 0.4)";
    shopBtn.title = `Dükkan (35g) - ${5 - (currentTurn - lastFreeShopTurn)} tur sonra bedava`;
  }
const drawer = document.getElementById('characterDrawer');
  if (drawer && drawer.classList.contains('active')) {
    updateDrawerContent();
  }
}

// ==== FEATURES (Pasif + Yardımcı + Augmentler) ====

function renderFeatures() {
  // 1. Karakter Pasifi
  const passiveArea = document.getElementById("passiveArea");
  passiveArea.innerHTML = `
    <div style="border-left:3px solid #9c27b0;padding-left:8px;margin-bottom:8px;background:#1a1a1a;padding:6px;border-radius:4px;">
      <div style="font-weight:bold;font-size:10px;color:#9c27b0;margin-bottom:4px;">KARAKTER PASİFİ</div>
      <div style="display:flex;align-items:center;gap:6px;">
        <img src="${player.passive.icon}" width="24">
        <div style="font-size:10px;line-height:1.3;">${player.passive.text}</div>
      </div>
    </div>
  `;

  // 2. Yardımcı
  const companionArea = document.getElementById("companionArea");
  if (companion) {
    companionArea.innerHTML = `
      <div style="border-left:3px solid #4caf50;padding-left:8px;background:#1a1a1a;padding:6px;border-radius:4px;">
        <div style="font-weight:bold;font-size:10px;color:#888;margin-bottom:4px;">YARDIMCI ÖZELLİĞİ</div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <img src="${companion.img}" width="32" style="border-radius:50%;border:2px solid #4caf50;">
          <div>
            <div style="font-size:11px;font-weight:bold;color:#4caf50;">${companion.name}</div>
            <div style="font-size:10px;color:#aaa;line-height:1.3;">${companion.bonus.text}</div>
          </div>
        </div>
      </div>
    `;
  } else {
    companionArea.innerHTML = `
      <div style="color:#888;font-size:10px;padding:4px;">Yardımcı: Tur 25'te seçilecek</div>
    `;
  }

  // 3. Augmentler
  const augmentsArea = document.getElementById("augmentsArea");
  if (selectedAugments.length > 0) {
    let html = `<div style="border-left:3px solid #FFD700;padding-left:8px;background:#1a1a1a;padding:6px;border-radius:4px;margin-top:8px;">
      <div style="font-weight:bold;font-size:10px;color:#FFD700;margin-bottom:6px;">AUGMENTLER</div>`;
    
    selectedAugments.forEach(augId => {
      // Augment'i bul
      let aug = null;
      for (let tier in augments) {
        const found = augments[tier].find(a => a.id === augId);
        if (found) {
          aug = found;
          break;
        }
      }
      
      if (aug) {
        html += `
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;padding:4px;background:#0a0a0a;border-radius:3px;">
            <div style="font-size:20px;">${aug.icon}</div>
            <div style="flex:1;">
              <div style="font-size:10px;font-weight:bold;color:#FFD700;">${aug.name}</div>
              <div style="font-size:9px;color:#888;">${aug.desc}</div>
            </div>
          </div>
        `;
      }
    });
    
    html += `</div>`;
    augmentsArea.innerHTML = html;
  } else {
    augmentsArea.innerHTML = "";
  }
}

// ==== INVENTORY ====

function renderInventory() {
  const grid = document.getElementById("itemGrid");
  grid.innerHTML = "";

  passiveItems.forEach(item => {
    const slot = document.createElement("div");
    slot.className = "itemSlot passive";

    const img = document.createElement("img");
    img.src = item.img;
    slot.appendChild(img);

    const badge = document.createElement("div");
    badge.className = "passiveBadge";
    badge.textContent = "P";
    slot.appendChild(badge);

    attachItemHover(slot, item);
    grid.appendChild(slot);
  });

  Object.values(inventory).forEach(entry => {
    const slot = document.createElement("div");
    slot.className = "itemSlot";

    const img = document.createElement("img");
    img.src = entry.item.img;
    slot.appendChild(img);

    if (entry.count > 1) {
      const c = document.createElement("div");
      c.className = "stackCount";
      c.textContent = entry.count;
      slot.appendChild(c);
    }

    attachItemHover(slot, entry.item);

    if (entry.item.usable) {
      slot.onclick = () => {
        entry.item.use();
        entry.count--;
        addLog("🧪 " + entry.item.name + " kullanıldı.");

        if (entry.count <= 0) delete inventory[entry.item.id];
        updateUI();
        renderInventory();
      };
    }

    grid.appendChild(slot);
  });
}

// ==== SHOP ====

document.getElementById("openShopBtn").onclick = () => {
  // Her 5 turda bir bedava
  let isFree = (currentTurn === 1) || (currentTurn - lastFreeShopTurn >= 5);
  
  if (isFree) {
    lastFreeShopTurn = currentTurn;
    shopCost = 0;
    openShop();
  } else {
    // 35 altın maliyet
    if (gold >= 35) {
      // Onay penceresi
      const confirmDiv = document.createElement("div");
      confirmDiv.className = "shopOverlay";
      confirmDiv.innerHTML = `
        <div class="shopPanel" style="text-align:center;max-width:400px;">
          <h3>🛒 Dükkanı Aç</h3>
          <p>Dükkanı açmak için <span style="color:gold;font-weight:bold;">35 altın</span> harcaman gerekiyor.</p>
          <p style="font-size:12px;color:#888;">
            ${5 - (currentTurn - lastFreeShopTurn)} tur sonra bedava olacak!
          </p>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:15px;">
            <button id="confirmShopBtn" style="padding:10px 20px;background:#4caf50;">✅ Aç (35g)</button>
            <button id="cancelShopBtn" style="padding:10px 20px;background:#f44336;">❌ İptal</button>
          </div>
        </div>
      `;
      document.body.appendChild(confirmDiv);

      document.getElementById("confirmShopBtn").onclick = () => {
        gold -= 35;
        updateUI();
        confirmDiv.remove();
        openShop();
      };

      document.getElementById("cancelShopBtn").onclick = () => {
        confirmDiv.remove();
      };
    } else {
      addLog("⚠️ Dükkan açmak için 35 altın gerekli!");
    }
  }
};

function openShop() {
  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.innerHTML = `
    <div class="shopPanel">
      <h2>🛒 Dükkan</h2>
      <div id="shopGrid"></div>
      <div style="text-align:center;margin-top:10px;">
        <button id="closeShopBtn">Geri</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const grid = overlay.querySelector("#shopGrid");

  shopItems.forEach(it => {
    const d = document.createElement("div");
    d.className = "shopItem";

    const alreadyBought = !it.stackable && purchasedItems.includes(it.id);
    const canBuy = gold >= it.price && !alreadyBought;

    d.innerHTML = `
      <img src="${it.img}"><br>
      <div class="itemName">${it.name}</div>
      <span style="color:gold">${it.price}g</span><br>
      ${alreadyBought ? '<span style="color:#888;font-size:12px;">Satın Alındı</span>' : 
        `<button class="buy-item-btn" ${canBuy ? "" : "disabled"}>Satın Al</button>`}
    `;

    // ✅ HOVER TOOLTIP (sadece desktop)
    if (window.innerWidth > 768) {
      d.addEventListener("mouseenter", () => {
        let content = `<b>${it.name}</b><br>`;
        if (it.price) content += `<span style="color:gold">${it.price}g</span><br>`;
        if (it.desc) content += `<span style="color:#aaa;font-size:11px;">${it.desc}</span><br>`;
        
        if (it.usable) {
          content += `<span style="color:#4caf50;">✓ Kullanılabilir</span>`;
        } else {
          content += `<span style="color:#9c27b0;">⚡ Pasif Eşya</span>`;
        }

        tooltip.innerHTML = content;
        tooltip.style.display = "block";
      });
      
      d.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
      });
      
      d.addEventListener("mouseleave", () => {
        hideTooltip();
      });
    }

    // ✅ SATIN AL BUTONU - MOBİL VE DESKTOP
    const btn = d.querySelector(".buy-item-btn");
    if (btn && canBuy) {
      btn.onclick = (e) => {
        e.stopPropagation();
        hideTooltip();
        buyItem(it, overlay);
      };
    }

    grid.appendChild(d);
  });

  overlay.querySelector("#closeShopBtn").onclick = () => {
    hideTooltip();
    overlay.remove();
  };
  
  // ✅ MOBİL - TOOLTIP İÇİN ITEM'A TIKLA
  if (window.innerWidth <= 768) {
    grid.querySelectorAll('.shopItem').forEach(item => {
      item.onclick = (e) => {
        // Eğer butona tıklanmadıysa tooltip göster
        if (!e.target.classList.contains('buy-item-btn')) {
          e.stopPropagation();
          
          const itemName = item.querySelector('.itemName').textContent;
          const itemObj = shopItems.find(it => it.name === itemName);
          
          if (itemObj) {
            let content = `<b>${itemObj.name}</b><br>`;
            if (itemObj.price) content += `<span style="color:gold">${itemObj.price}g</span><br>`;
            if (itemObj.desc) content += `<span style="color:#aaa;font-size:11px;">${itemObj.desc}</span><br>`;
            
            if (itemObj.usable) {
              content += `<span style="color:#4caf50;">✓ Kullanılabilir</span>`;
            } else {
              content += `<span style="color:#9c27b0;">⚡ Pasif Eşya</span>`;
            }

            tooltip.innerHTML = content;
            tooltip.style.display = "block";
            tooltip.style.position = "fixed";
            tooltip.style.top = "50%";
            tooltip.style.left = "50%";
            tooltip.style.transform = "translate(-50%, -50%)";
            tooltip.style.zIndex = "10001";
          }
        }
      };
    });
  }
}

function buyItem(item, overlay) {
  if (gold < item.price) {
    addLog("⚠️ Yeterli altın yok!");
    return;
  }

  gold -= item.price;
  trackItemBought();

  // ✅ TOOLTIP KAPAT
  hideTooltip();

  if (item.usable) {
    if (!inventory[item.id]) {
      inventory[item.id] = { item: item, count: 1 };
    } else {
      inventory[item.id].count++;
    }
    addLog("🛒 " + item.name + " satın alındı.");
  } else if (item.passive) {
    item.passive();
    passiveItems.push(item);
    purchasedItems.push(item.id);
    addLog("🛡️ " + item.name + " pasif etkisi aktif.");
  }

  renderInventory();
  updateUI();

  overlay.remove();
  
  // ✅ YENİDEN AÇ
  setTimeout(() => openShop(), 50);
}

// ==== BATTLE ====

function applyTurnBonuses() {
  if (currentTurn === 1) return;

  if (companion && companion.bonus.type === "heal") {
    player.hp = Math.min(player.maxHp, player.hp + companion.bonus.value);
    addLog(`💚 ${companion.name} seni iyileştirdi! +${companion.bonus.value} HP`);
  }

  if (player.warmog) {
    player.hp = Math.min(player.maxHp, player.hp + 10);
    addLog(`❤️ Warmog's Armor! +10 HP`);
  }

  if (player.prismaticRegen > 0) {
    player.hp = Math.min(player.maxHp, player.hp + player.prismaticRegen);
    addLog(`💚 Ölümsüzlük! +${player.prismaticRegen} HP`);
  }

  if (player.gargoyl) {
    player.mr += 2;
    player.armor += 2;
    addLog(`🗿 Gargoyl Taşzırhı! Zırh ve MR +2`);
  }

  if (player.shojin) {
    player.mana = Math.min(player.maxMana, player.mana + 10);
    addLog(`🔱 Shojin Mızrağı! Mana +10`);
  }

  if (player.titan) {
    player.ad += 2;
    player.ap += 2;
    addLog(`⚡ Titanın Azmi! AD ve AP +2`);
  }

  updateUI();
}

/* TÜMÜNÜ BUL VE DEĞİŞTİR: */
function startBattle() {
  if (currentTurn > maxTurns) {
    addLog("🏆 TEBRİKLER! Tüm turları tamamladınız!");
    endGame(true);
    return;
  }

  applyTurnBonuses();

  // ✅ AUGMENT VE COMPANION KONTROLÜ - KORİDOR SIFIRLAMADAN ÖNCE
  if (currentTurn % 10 === 0 && currentTurn > 0 && currentTurn !== 50) {
    showAugmentSelection();
    return;
  }

  if (currentTurn === 25 && !companion) {
    showCompanionSelect();
    return;
  }

  // ✅ SADECE YENİ TUR BAŞLARKEN KORİDORLARI SIFIRLA
  // ✅ currentTurn === 1 VEYA augment/companion seçimi SONRASI
  const shouldResetLanes = 
    currentTurn === 1 || 
    lanes.every(lane => lane.length === 0);
  
  if (shouldResetLanes) {
    lanes = [[], [], []];
    selectedLane = 0;
    
    // Düşman sayısı
    let totalEnemies = 1;
    if (currentTurn >= 5) totalEnemies = Math.random() < 0.3 ? 2 : 1;
    if (currentTurn >= 10) totalEnemies = 2;
    if (currentTurn >= 15) totalEnemies = 2 + (Math.random() < 0.3 ? 1 : 0);
    if (currentTurn >= 20) totalEnemies = 3;
    if (currentTurn >= 25) totalEnemies = 3 + (Math.random() < 0.4 ? 1 : 0);
    if (currentTurn >= 30) totalEnemies = 4;
    if (currentTurn >= 35) totalEnemies = 4 + (Math.random() < 0.5 ? 1 : 0);
    if (currentTurn >= 40) totalEnemies = 5;

    // Düşmanları koridorlara dağıt
    for (let i = 0; i < totalEnemies; i++) {
      let enemyIndex = Math.min(Math.floor(currentTurn / 3.5), enemyTypes.length - 1);
      let template = enemyTypes[enemyIndex];
      let enemy = JSON.parse(JSON.stringify(template));
      
      let boost = Math.floor(currentTurn / 3);
      enemy.hp += boost * 20;
      enemy.ad += boost * 7;
      enemy.ap += boost * 5;
      enemy.armor += boost * 4;
      enemy.mr += boost * 3;
      enemy.maxHp = enemy.hp;
      
      let randomLane = Math.floor(Math.random() * 3);
      lanes[randomLane].push(enemy);
    }

    addLog(`⚔️ Tur ${currentTurn}: Savaş başladı!`);
  }
  
  renderBattle();
  checkAchievements();

  setTimeout(() => {
    const lanesDivs = document.querySelectorAll('.lane');
    const selectedLaneDiv = lanesDivs[selectedLane];
    
    if (selectedLaneDiv) {
      selectedLaneDiv.classList.add('turn-start');
      setTimeout(() => {
        selectedLaneDiv.classList.remove('turn-start');
      }, 800);
    }
  }, 100);
}

function renderBattle() {
  const area = document.getElementById("battleArea");
  area.innerHTML = "";

  const laneColors = [
    { border: '#00bcd4', glow: 'rgba(0, 188, 212, 0.8)', glowSubtle: 'rgba(0, 188, 212, 0.15)', name: 'Buz Mavisi' },
    { border: '#ffd700', glow: 'rgba(255, 215, 0, 0.8)', glowSubtle: 'rgba(255, 215, 0, 0.15)', name: 'Altın' },
    { border: '#4caf50', glow: 'rgba(76, 175, 80, 0.8)', glowSubtle: 'rgba(76, 175, 80, 0.15)', name: 'Yeşim' }
  ];

  const container = document.createElement("div");
  container.className = "lanes-container";

  lanes.forEach((lane, laneIndex) => {
    const isSelected = laneIndex === selectedLane;
    const color = laneColors[laneIndex];
    const isEmpty = lane.length === 0;
    
    const laneDiv = document.createElement("div");
    laneDiv.className = `lane ${isSelected ? 'selected' : ''} ${isEmpty ? 'empty' : ''}`;
    laneDiv.style.setProperty('--lane-border', color.border);
    laneDiv.style.setProperty('--lane-glow', color.glow);
    laneDiv.style.setProperty('--lane-glow-subtle', color.glowSubtle);
    laneDiv.style.borderColor = color.border;
    
    laneDiv.onclick = (e) => {
      // Eğer düşman kartına tıklanmadıysa
      if (!e.target.closest('.enemy-card')) {
        const oldSelected = selectedLane;
        selectedLane = laneIndex;
        
        laneDiv.classList.add('clicked');
        setTimeout(() => laneDiv.classList.remove('clicked'), 150);
        
        if (oldSelected !== laneIndex) {
          addLog(`📍 ${color.name} koridor seçildi!`);
        }
        
        renderBattle();
      }
    };
    
    const topLine = document.createElement("div");
    topLine.className = "lane-top-line";
    topLine.style.background = color.border;
    laneDiv.appendChild(topLine);

    if (lane.length > 0) {
      lane.forEach((enemy, enemyIndex) => {
        const enemyCard = document.createElement("div");
        const isFirst = enemyIndex === 0;
        
        enemyCard.className = `enemy-card ${isFirst && isSelected ? 'target-highlight' : ''}`;
        enemyCard.dataset.enemyIndex = enemyIndex;
        enemyCard.dataset.laneIndex = laneIndex;
        
        enemyCard.style.cssText = `
          background: ${isFirst 
            ? `linear-gradient(135deg, rgba(${
                color.border === '#00bcd4' ? '0,188,212' : 
                color.border === '#ffd700' ? '255,215,0' : 
                '76,175,80'
              },0.2) 0%, rgba(10,10,10,0.95) 100%)`
            : 'linear-gradient(135deg, rgba(40,40,40,0.8) 0%, rgba(20,20,20,0.9) 100%)'
          };
          border: 3px solid ${isFirst ? color.border : '#444'};
          border-radius: 12px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          position: relative;
          cursor: pointer;
        `;
        
        // ✅ MOBİLDE DÜŞMANA TIKLANINCA FLOATING PANEL AÇ
        enemyCard.onclick = (e) => {
          e.stopPropagation();
          
          // Koridoru seç
          selectedLane = laneIndex;
          
          // Mobilde floating panel aç
          if (window.innerWidth <= 768) {
            showFloatingActionPanel(enemy, laneIndex, enemyIndex);
          }
          
          renderBattle();
        };
        
        if (isFirst) {
          const badge = document.createElement("div");
          badge.textContent = "🎯";
          badge.style.cssText = `
            position: absolute;
            top: -12px;
            right: -12px;
            background: ${color.border};
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border: 3px solid #000;
            box-shadow: 0 0 20px ${color.glow};
            animation: targetPulse 1.5s infinite;
            z-index: 10;
          `;
          enemyCard.appendChild(badge);
        }
        
        const enemyImg = document.createElement("img");
        enemyImg.src = enemy.img;
        enemyImg.style.cssText = `
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 10px;
          border: 3px solid ${isFirst ? color.border : '#555'};
          ${isFirst ? `box-shadow: 0 0 25px ${color.glow};` : 'box-shadow: 0 2px 8px rgba(0,0,0,0.5);'}
          pointer-events: none;
        `;
        enemyCard.appendChild(enemyImg);
        
        const nameDiv = document.createElement("div");
        nameDiv.textContent = enemy.name;
        nameDiv.style.cssText = `
          font-weight: bold;
          color: ${isFirst ? color.border : '#fff'};
          font-size: 15px;
          text-align: center;
          text-shadow: ${isFirst ? `0 0 10px ${color.glow}` : '0 2px 4px rgba(0,0,0,0.8)'};
          letter-spacing: 0.5px;
          pointer-events: none;
        `;
        enemyCard.appendChild(nameDiv);
        
        const hpContainer = document.createElement("div");
        hpContainer.style.cssText = `
          width: 100%;
          background: #1a1a1a;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #333;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
          pointer-events: none;
        `;
        
        const hpBar = document.createElement("div");
        const maxHp = enemy.maxHp || enemy.hp;
        const hpPercent = (enemy.hp / maxHp) * 100;
        hpBar.style.cssText = `
          width: ${hpPercent}%;
          height: 10px;
          background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
          transition: width 0.3s;
          box-shadow: 0 0 8px rgba(231,76,60,0.6);
        `;
        hpContainer.appendChild(hpBar);
        enemyCard.appendChild(hpContainer);
        
        const hpText = document.createElement("div");
        hpText.textContent = `❤️ ${enemy.hp}`;
        hpText.style.cssText = `
          color: #e74c3c;
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          text-shadow: 0 0 8px rgba(231,76,60,0.8);
          pointer-events: none;
        `;
        enemyCard.appendChild(hpText);
        
        let damageInfo = "";
        if (enemy.ad > 0 && enemy.ap > 0) {
          damageInfo = `<span style="color:#ff5722;">⚔️${enemy.ad}</span> <span style="color:#9c27b0;">🔮${enemy.ap}</span>`;
        } else if (enemy.ad > 0) {
          damageInfo = `<span style="color:#ff5722;">⚔️ ${enemy.ad}</span>`;
        } else if (enemy.ap > 0) {
          damageInfo = `<span style="color:#9c27b0;">🔮 ${enemy.ap}</span>`;
        } else if (enemy.manaDrain) {
          damageInfo = `<span style="color:#2196f3;">💧 Mana Çalar</span>`;
        }
        
        if (damageInfo) {
          const dmgDiv = document.createElement("div");
          dmgDiv.innerHTML = damageInfo;
          dmgDiv.style.cssText = `
            font-size: 12px;
            text-align: center;
            margin-top: 4px;
            font-weight: 600;
            pointer-events: none;
          `;
          enemyCard.appendChild(dmgDiv);
        }
        
        const defenseDiv = document.createElement("div");
        defenseDiv.innerHTML = `<span style="color:#90a4ae;">🛡️${enemy.armor}</span> <span style="color:#7e57c2;">🔰${enemy.mr}</span>`;
        defenseDiv.style.cssText = `
          font-size: 10px;
          color: #777;
          text-align: center;
          margin-top: 2px;
          pointer-events: none;
        `;
        enemyCard.appendChild(defenseDiv);
        
        laneDiv.appendChild(enemyCard);
      });
    }

    container.appendChild(laneDiv);
  });

  area.appendChild(container);
}

// ✅ Seçili koridoru parlat
function highlightSelectedLane() {
  const lanes = document.querySelectorAll('.lane');
  const selectedLaneDiv = lanes[selectedLane];
  
  if (selectedLaneDiv) {
    selectedLaneDiv.style.transition = 'none';
    selectedLaneDiv.style.boxShadow = '0 0 60px var(--lane-glow), 0 0 100px var(--lane-glow), inset 0 0 50px var(--lane-glow)';
    
    setTimeout(() => {
      selectedLaneDiv.style.transition = 'all 0.3s ease';
      selectedLaneDiv.style.boxShadow = '';
    }, 300);
  }
}

// ✅ Saldırı animasyonu (mevcut)
function showAttackAnimation(laneIndex, enemyIndex, damage) {
  const lanes = document.querySelectorAll('.lane');
  const targetLane = lanes[laneIndex];
  
  if (targetLane) {
    targetLane.classList.add('attacking');
    setTimeout(() => {
      targetLane.classList.remove('attacking');
    }, 250);
  }
  
  const enemyCards = targetLane.querySelectorAll('.enemy-card');
  const targetCard = enemyCards[enemyIndex];
  
  if (targetCard) {
    targetCard.classList.add('flash');
    setTimeout(() => {
      targetCard.classList.remove('flash');
    }, 120);
    
    const damageNum = document.createElement('div');
    damageNum.className = 'damage-number';
    damageNum.textContent = `-${Math.floor(damage)}`;
    targetCard.appendChild(damageNum);
    
    setTimeout(() => {
      damageNum.remove();
    }, 1000);
  }
}

function showCompanionSelect() {
  const availableCompanions = [...companions];
  const choices = [];
  const rerollUsed = [false, false, false];
  let selectedCompanion = null;
  
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * availableCompanions.length);
    choices.push(availableCompanions[index]);
    availableCompanions.splice(index, 1);
  }

  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.innerHTML = `
    <div class="shopPanel" style="max-width:800px;">
      <h2>🎖️ Yardımcı Seç</h2>
      <p style="text-align:center;color:#aaa;font-size:14px;">Tur 25 Ödülü - Her kartta 1 yenileme hakkın var</p>
      <div id="companionGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:20px 0;"></div>
      <div style="text-align:center;">
        <button id="confirmCompanionBtn" style="display:none;padding:14px 40px;font-size:16px;background:#4caf50;border:3px solid gold;">✅ Seçimi Onayla</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const grid = overlay.querySelector("#companionGrid");
  const confirmBtn = overlay.querySelector("#confirmCompanionBtn");

  function renderCompanionCards() {
    grid.innerHTML = "";
    
    choices.forEach((comp, i) => {
      const d = document.createElement("div");
      d.className = "charCard companionCard";
      d.innerHTML = `
        <img src="${comp.img}">
        <div><b>${comp.name}</b></div>
        <div style="font-size:12px;margin-top:8px;color:#aaa;">${comp.bonus.text}</div>
        <button class="rerollCardBtn" data-index="${i}" ${rerollUsed[i] ? 'disabled' : ''}>
          ${rerollUsed[i] ? '❌ Kullanıldı' : '🔄 Yenile'}
        </button>
      `;
      
      d.onclick = (e) => {
        if (e.target.classList.contains('rerollCardBtn')) return;
        document.querySelectorAll(".companionCard").forEach(x => x.classList.remove("selected"));
        d.classList.add("selected");
        selectedCompanion = comp;
        confirmBtn.style.display = "block";
      };
      
      grid.appendChild(d);
    });

    document.querySelectorAll('.rerollCardBtn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index);
        if (rerollUsed[index]) return;
        
        rerollUsed[index] = true;
        
        const remaining = companions.filter(c => !choices.includes(c));
        if (remaining.length > 0) {
          choices[index] = remaining[Math.floor(Math.random() * remaining.length)];
        }
        
        renderCompanionCards();
      };
    });
  }

  confirmBtn.onclick = () => {
    if (!selectedCompanion) return;
    
    companion = selectedCompanion;
    
    // ✅ SADECE CRIT BONUSU UYGULA (Diğerleri dealDamage'de)
    if (companion.bonus.type === "crit") {
      player.critChance += companion.bonus.value;
    }
    
    // ✅ STRATEGY BONUSU (Erwin)
    if (companion.bonus.type === "strategy") {
      player.ad = Math.floor(player.ad * 1.2);
      player.ap = Math.floor(player.ap * 1.2);
      player.armor = Math.floor(player.armor * 1.2);
      player.mr = Math.floor(player.mr * 1.2);
      player.maxHp = Math.floor(player.maxHp * 1.2);
      player.hp = Math.floor(player.hp * 1.2);
    }
    
    addLog(`🎖️ ${companion.name} ekibe katıldı!`);
    overlay.remove();
    updateUI();
    renderFeatures();
    continueAfterAugment();
  };

  renderCompanionCards();
}

// ==== COMBAT ====

document.getElementById("attackBtn").onclick = () => {
  if (lanes[selectedLane].length === 0) {
    addLog("⚠️ Bu koridor boş! Başka bir koridor seç.");
    return;
  }
  
  isDefending = false;
  
  const enemyBeforeHp = lanes[selectedLane][0].hp;
  
  dealDamage(player, lanes[selectedLane][0], false);
  
  const damageDealt = enemyBeforeHp - lanes[selectedLane][0].hp;
  
  // ✅ SALDIRI PARLATMA
  highlightSelectedLane();
  showAttackAnimation(selectedLane, 0, damageDealt);

  if (lanes[selectedLane][0].hp <= 0) {
    onEnemyDefeated(selectedLane, 0);
  } else {
    enemyTurn();
    nextTurn();
  }
};

document.getElementById("skillBtn").onclick = () => {
  // Seçili koridorda düşman var mı?
  if (lanes[selectedLane].length === 0) {
    addLog("⚠️ Bu koridor boş! Başka bir koridor seç.");
    return;
  }
  
  let cost = player.skillCost;
  
  if (player.name === "Fern") {
    cost = Math.floor(cost * 0.8);
  }

  if (companion && companion.bonus.type === "intelligence") {
    cost = Math.floor(cost * 0.80);
  }

  if (player.prismaticMana > 0) {
    cost = Math.floor(cost * (1 - player.prismaticMana));
  }

  if (player.mana < cost) {
    if (inventory["mana_pot"] && inventory["mana_pot"].count > 0) {
      addLog("⚠️ Yeterli mana yok! Mana İksiri kullanmayı dene.");
    } else {
      addLog("⚠️ Yeterli mana yok! Dükkan'dan Mana İksiri al.");
    }
    return;
  }

  isDefending = false;
  player.mana -= cost;
  trackSkillUse();

 if (player.name === "Kara Kedi") {
  addLog(`😼 KEDİ KRİZİM! Koridor ${selectedLane + 1} tamamen temizlendi!`);
  
  // ✅ HER DÜŞMAN İÇİN ANİMASYON
  lanes[selectedLane].forEach((enemy, idx) => {
    showAttackAnimation(selectedLane, idx, enemy.hp);
    gold += enemy.gold;
    trackKill();
    trackGold(enemy.gold);
  });
  
  lanes[selectedLane] = [];
  
} else {
  // ✅ NORMAL SKILL
  const enemyBeforeHp = lanes[selectedLane][0].hp;
  
  dealDamage(player, lanes[selectedLane][0], true);
  
  const damageDealt = enemyBeforeHp - lanes[selectedLane][0].hp;
  showAttackAnimation(selectedLane, 0, damageDealt);

  if (lanes[selectedLane][0].hp <= 0) {
    onEnemyDefeated(selectedLane, 0);
  } else {
    enemyTurn();
    nextTurn();
  }
}
  
  // Tüm koridorlar boş mu?
  let allEmpty = lanes.every(lane => lane.length === 0);
  if (allEmpty) {
    currentTurn++;
    trackTurnComplete();
    
    if (berserkerTurnsLeft > 0) {
      berserkerTurnsLeft--;
      if (berserkerTurnsLeft === 0) {
        addLog("😌 Berserker modu sona erdi.");
      }
    }
    
    updateUI();
    startBattle();
  } else {
    renderBattle();
    updateUI();
  }
};

document.getElementById("defendBtn").onclick = () => {
  isDefending = true;
  addLog("🛡️ Savunma pozisyonu aldın!");
  
  enemyTurn();
  nextTurn();
};

// Senin verdiğin kodun başına eklemeler

// ==== dealDamage FONKSİYONU - TAM DÜZELTİLMİŞ ====

function dealDamage(attacker, defender, isMagic=false) {
  let base = isMagic ? attacker.ap : attacker.ad;

  if (attacker === player && berserkerTurnsLeft > 0) {
    base = Math.floor(base * 1.4);
  }

  if (attacker === player && !isMagic && companion && companion.bonus.type === "taijutsu") {
    base += 25;
  }

  if (attacker === player && !isMagic && companion && companion.bonus.type === "ad") {
    base += companion.bonus.value;
  }

  if (isMagic && attacker === player) {
    base = Math.floor(base * player.skillMult);
    
    if (player.name === "Frieren") {
      base = Math.floor(base * 1.2);
    }

    if (player.rabadon) {
      base = Math.floor(base * 1.15);
    }

    if (companion && companion.bonus.type === "intelligence") {
      base += 25;
    }
  }

  if (attacker === player && player.prismaticDamage) {
    base = Math.floor(base * (1 + player.prismaticDamage));
  }

  if (attacker === player && player.name === "Eren") {
    let hpPercent = player.hp / player.maxHp;
    let rageBonus = Math.floor((1 - hpPercent) * 40);
    base += rageBonus;
  }

  if (attacker === player && player.name === "Naruto") {
    let hpPercent = player.hp / player.maxHp;
    if (hpPercent <= 0.3 && !narutoRageActive) {
      narutoRageActive = true;
      player.ad = Math.floor(player.ad * 1.3);
      player.ap = Math.floor(player.ap * 1.3);
      player.armor = Math.floor(player.armor * 1.3);
      player.mr = Math.floor(player.mr * 1.3);
      addLog("🦊 Naruto'nun Kyuubi gücü uyanıyor! Tüm statlar %30 arttı!");
      updateUI();
    }
  }

  let isCrit = Math.random() * 100 < attacker.critChance;

  // ✅ LIGHT YAGAMI - AP KRİTİK PASSİFİ
    if (attacker === player && player.name === "Light Yagami" && isMagic) {
    // Light Yagami skill ile her zaman kritik vurabilir
    if (Math.random() * 100 < player.critChance) {
      isCrit = true;
    }
  }
  if (isCrit) {
    base = Math.floor(base * attacker.critMult);
    
    if (attacker === player) {
      trackCritical();
      const critAch = achievements.find(a => a.id === "critical_master");
      if (critAch && !critAch.unlocked) {
        critAch.critCount++;
      }
    }
    
    if (attacker === player && player.name === "Levi" && !leviCritTriggered) {
      leviCritTriggered = true;
      player.critChance += 10;
      addLog("⚡ Levi'nin pasifi aktif oldu! Kritik şansı +10%");
      updateUI();
    }

    // ✅ LIGHT YAGAMI - DEATH NOTE PASSİFİ (Hem skill hem normal için)
    if (attacker === player && player.name === "Light Yagami") {
      let deathNote = Math.floor(defender.hp * 0.05);
      base += deathNote;
      addLog("📓 Death Note etkisi! +" + deathNote + " ekstra hasar!");
    }
  }

  if (attacker === player && isMagic) {
    const skillAch = achievements.find(a => a.id === "skill_master");
    if (skillAch && !skillAch.unlocked) {
      skillAch.skillCount++;
    }
  }

  let defense = isMagic ? defender.mr : defender.armor;
  let finalDmg = Math.max(1, base - defense);

  if (attacker === player) {
    trackDamageDealt(finalDmg);
  }

  if (defender === player && player.prismaticDefense) {
    finalDmg = Math.floor(finalDmg * (1 - player.prismaticDefense));
  }

  if (attacker === player && player.name === "Saitama" && !isMagic && currentTurn < 40) {
    if (Math.random() < 0.2) {
      finalDmg = defender.hp;
      addLog("👊 ONE PUUUUNCH! Anında öldürme!");
    }
  }

  // ✅ SADECE BİR KEZ HASAR VER
  if (attacker === player && player.doubleStrike && !isMagic) {
    defender.hp -= finalDmg;
    addLog(`⚔️⚔️ Çift Saldırı! 2x${finalDmg} hasar!`);
    finalDmg = finalDmg * 2; // Lifesteal için
  } else {
    defender.hp -= finalDmg; // ✅ TEK SEFERLIK
  }

  if (attacker === player && player.lifesteal > 0) {
    let heal = Math.floor(finalDmg * player.lifesteal);
    player.hp = Math.min(player.maxHp, player.hp + heal);
    addLog(`💉 ${heal} can emildi!`);
  }

  if (attacker === player && companion && companion.bonus.type === "speed") {
    if (Math.random() < 0.25) {
      let extraDmg = Math.floor(base * 0.5);
      defender.hp -= extraDmg;
      addLog(`⚔️ Mikasa'nın hızı! Ekstra ${extraDmg} hasar!`);
    }
  }

  if (attacker === player && player.name === "Guts" && berserkerTurnsLeft === 0) {
    if (Math.random() < 0.05) {
      berserkerTurnsLeft = 3; // ✅ DOĞRU DEĞİŞKEN ADI
      addLog("😡 Guts öfke moduna girdi! 3 tur boyunca hasar %40 arttı!");
    }
  }

  if (isCrit) {
    addLog(`💥 KRİTİK! ${finalDmg} hasar vurdun!`);
  } else if (isMagic) {
    addLog(`🔮 Skill ile ${finalDmg} hasar vurdun!`);
  } else {
    addLog(`⚔️ ${finalDmg} hasar vurdun.`);
  }

  updateUI();
  return finalDmg;
}

function enemyTurn() {
  // Her koridordaki EN ÖNDEKİ düşman saldırır
  lanes.forEach((lane, laneIndex) => {
    if (lane.length === 0) return; // Boş koridor
    
    const enemy = lane[0]; // En öndeki
    
    // ✅ MANA SÖMÜRüCÜ
    if (enemy.manaDrain) {
      let manaDmg = Math.max(10, 30);
      player.mana = Math.max(0, player.mana - manaDmg);
      addLog(`🧙 ${enemy.name} (K${laneIndex + 1}) ${manaDmg} mana çaldı!`);
      return;
    }
    
    let totalDmg = 0;
    
    // Fiziksel hasar
    if (enemy.ad > 0) {
      let physicalDmg = Math.max(1, enemy.ad - player.armor);
      totalDmg += physicalDmg;
    }
    
    // Büyü hasarı
    if (enemy.ap > 0) {
      let magicDmg = Math.max(1, enemy.ap - player.mr);
      totalDmg += magicDmg;
    }

    // Savunma modu
    if (isDefending) {
      totalDmg = Math.floor(totalDmg / 2);
    }

    // Gojo pasifi
    if (player.name === "Gojo Satoru" && gojoHitsRemaining > 0) {
      totalDmg = Math.floor(totalDmg / 2);
      gojoHitsRemaining--;
      addLog(`♾️ Gojo Infinity! (${gojoHitsRemaining} kalan)`);
    }

    player.hp -= totalDmg;
    trackDamageTaken(totalDmg);

    // Thornmail yansıtma
    if (player.thornmail > 0) {
      let reflectDmg = Math.floor(totalDmg * player.thornmail);
      enemy.hp -= reflectDmg;
      addLog(`🌵 Thornmail ${reflectDmg} yansıttı!`);
      
      if (enemy.hp <= 0) {
        addLog(`💀 ${enemy.name} thornmail'den öldü!`);
        onEnemyDefeated(laneIndex, 0);
      }
    }
    
    addLog(`👹 ${enemy.name} (K${laneIndex + 1}) ${totalDmg} hasar verdi!`);
  });

  if (player.hp <= 0) {
    player.hp = 0;
    addLog("💀 Öldün!");
    endGame(false);
  }
}

function onEnemyDefeated(laneIndex, enemyIndex) {
  const defeatedEnemy = lanes[laneIndex][enemyIndex];
  gold += defeatedEnemy.gold;

  trackKill();
  trackGold(defeatedEnemy.gold);
  addLog(`🏆 ${defeatedEnemy.name} öldü! +${defeatedEnemy.gold}g`);
  
  if (companion && companion.bonus.type === "death") {
    let hpRestore = Math.floor(player.maxHp * 0.2);
    let manaRestore = Math.floor(player.maxMana * 0.2);
    player.hp = Math.min(player.maxHp, player.hp + hpRestore);
    player.mana = Math.min(player.maxMana, player.mana + manaRestore);
    addLog(`💀 Shinigami! +${hpRestore} HP, +${manaRestore} Mana`);
  }
  
  lanes[laneIndex].splice(enemyIndex, 1);
  
  // ✅ SEÇİLİ KORİDORU KORU
  // Sadece koridorda düşman kalmadıysa başka koridora geç
  if (lanes[laneIndex].length === 0) {
    // Başka dolu koridor var mı?
    let nextLane = lanes.findIndex(lane => lane.length > 0);
    if (nextLane !== -1) {
      selectedLane = nextLane;
    }
  }
  
  let allEmpty = lanes.every(lane => lane.length === 0);
  
  if (allEmpty) {
    currentTurn++;
    trackTurnComplete();
    
    if (berserkerTurnsLeft > 0) {
      berserkerTurnsLeft--;
      if (berserkerTurnsLeft === 0) {
        addLog("😌 Berserker bitti.");
      }
    }
    
    updateUI();
    startBattle();
  } else {
    renderBattle();
    updateUI();
  }
}

function nextTurn() {
  renderBattle();
  updateUI();
}
function endGame(victory) {
  // ✅ ESKİ KODU SİL - YENİ FONKSİYON KULLAN
  trackTurnComplete(); // Tur sayısını güncelle
  showEndGameStats(victory); // Yeni istatistik ekranı
}



const tooltip = document.getElementById("tooltip");

function addLog(text) {
  const logPanel = document.getElementById("logPanel");
  const div = document.createElement("div");
  div.textContent = text;
  logPanel.appendChild(div);
  logPanel.scrollTop = logPanel.scrollHeight;
}

// Tooltip'i kapatma fonksiyonu
function hideTooltip() {
  tooltip.style.display = "none";
}

// Sayfa tıklamasında tooltip'i kapat
document.addEventListener("click", (e) => {
  if (!e.target.closest('.itemSlot') && !e.target.closest('.shopItem')) {
    hideTooltip();
  }
});

function attachItemHover(element, item) {
  // ✅ SADECE DESKTOP VE INVENTORY İÇİN
  if (window.innerWidth > 768) {
    element.addEventListener("mouseenter", () => {
      element.classList.add("itemHover");
      
      let content = `<b>${item.name}</b><br>`;
      if (item.price) content += `<span style="color:gold">${item.price}g</span><br>`;
      if (item.desc) content += `<span style="color:#aaa;font-size:11px;">${item.desc}</span><br>`;
      
      if (item.usable) {
        content += `<span style="color:#4caf50;">✓ Kullanılabilir</span>`;
      } else {
        content += `<span style="color:#9c27b0;">⚡ Pasif Eşya</span>`;
      }

      tooltip.innerHTML = content;
      tooltip.style.display = "block";
    });

    element.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove("itemHover");
      hideTooltip();
    });
  }
}

// ===== AUGMENT SİSTEMİ =====

function showAugmentSelection() {
  // Tier belirleme (şans bazlı)
  let tierRoll = Math.random();
  let tier;
  
  if (tierRoll < 0.60) tier = "silver";       // %60 Gümüş
  else if (tierRoll < 0.90) tier = "gold";    // %30 Altın
  else tier = "prismatic";                     // %10 Prizmatik

  const tierNames = { silver: "🥈 Gümüş", gold: "🥇 Altın", prismatic: "💎 Prizmatik" };
  const tierColors = { silver: "#C0C0C0", gold: "#FFD700", prismatic: "#FF1493" };

  // 3 rastgele augment seç
  const availableAugments = augments[tier].filter(aug => !selectedAugments.includes(aug.id));
  const choices = [];
  
  for (let i = 0; i < 3 && availableAugments.length > 0; i++) {
    const index = Math.floor(Math.random() * availableAugments.length);
    choices.push(availableAugments[index]);
    availableAugments.splice(index, 1);
  }

  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.innerHTML = `
    <div class="shopPanel" style="max-width:700px;">
      <h2 style="color:${tierColors[tier]};">${tierNames[tier]} Augment Seçimi</h2>
      <p style="text-align:center;color:#aaa;font-size:14px;">Bir augment seç ve güçlen!</p>
      <div id="augmentGrid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:15px;"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const grid = overlay.querySelector("#augmentGrid");

  choices.forEach(aug => {
    const d = document.createElement("div");
    d.className = "augmentCard";
    d.style.borderColor = tierColors[tier];
    d.innerHTML = `
      <div style="font-size:48px;margin-bottom:10px;">${aug.icon}</div>
      <div style="font-weight:bold;font-size:16px;margin-bottom:8px;">${aug.name}</div>
      <div style="font-size:13px;color:#aaa;">${aug.desc}</div>
    `;
    d.onclick = () => {
      aug.effect();
      selectedAugments.push(aug.id);
      // ✅ AUGMENT TAKIBI EKLE
      trackAugment();
      addLog(`✨ ${aug.name} augmenti seçildi!`);
      overlay.remove();
      updateUI();
      renderInventory();
      renderFeatures(); // Augmentleri göster
      checkAchievements();
      
      // Augment seçildikten sonra savaşa devam
      continueAfterAugment();
    };
    grid.appendChild(d);
  });
}

// Augment sonrası devam
function continueAfterAugment() {
  // ✅ YENİ LANE SİSTEMİ İLE DEVAM ET
  lanes = [[], [], []];
  selectedLane = 0;
  
  // Düşman sayısı
  let totalEnemies = 1;
  if (currentTurn >= 5) totalEnemies = Math.random() < 0.3 ? 2 : 1;
  if (currentTurn >= 10) totalEnemies = 2;
  if (currentTurn >= 15) totalEnemies = 2 + (Math.random() < 0.3 ? 1 : 0);
  if (currentTurn >= 20) totalEnemies = 3;
  if (currentTurn >= 25) totalEnemies = 3 + (Math.random() < 0.4 ? 1 : 0);
  if (currentTurn >= 30) totalEnemies = 4;
  if (currentTurn >= 35) totalEnemies = 4 + (Math.random() < 0.5 ? 1 : 0);
  if (currentTurn >= 40) totalEnemies = 5;

  // Düşmanları rastgele koridorlara dağıt
  for (let i = 0; i < totalEnemies; i++) {
    let enemyIndex = Math.min(Math.floor(currentTurn / 3.5), enemyTypes.length - 1);
    let template = enemyTypes[enemyIndex];
    let enemy = JSON.parse(JSON.stringify(template));
    
    let boost = Math.floor(currentTurn / 3);
    enemy.hp += boost * 20;
    enemy.ad += boost * 7;
    enemy.ap += boost * 5;
    enemy.armor += boost * 4;
    enemy.mr += boost * 3;
    enemy.maxHp = enemy.hp;
    
    let randomLane = Math.floor(Math.random() * 3);
    lanes[randomLane].push(enemy);
  }

  if (totalEnemies > 1) {
    addLog(`⚔️ Tur ${currentTurn}: ${totalEnemies} düşmanla karşılaşıyorsun!`);
  } else {
    addLog(`⚔️ Tur ${currentTurn}: Savaş devam ediyor!`);
  }
  
  renderBattle();
  checkAchievements();
}

// ===== BAŞARIM SİSTEMİ =====

function checkAchievements() {
  achievements.forEach(ach => {
    if (ach.unlocked) return;

    let unlock = false;

    // Koşulları kontrol et
    if (ach.id === "first_blood" && currentTurn > 1) unlock = true;
    if (ach.id === "survivor_10" && currentTurn >= 10) unlock = true;
    if (ach.id === "survivor_25" && currentTurn >= 25) unlock = true;
    if (ach.id === "rich" && gold >= 300) unlock = true;
    if (ach.id === "critical_master" && ach.critCount >= 10) unlock = true;
    if (ach.id === "skill_master" && ach.skillCount >= 20) unlock = true;
    if (ach.id === "tank" && player.maxHp >= 500) unlock = true;

    if (unlock) {
      ach.unlocked = true;
      gold += ach.reward;
      addLog(`🏆 Başarım Açıldı: ${ach.name} (+${ach.reward}g)`);
      renderAchievements();
      updateUI();
    }
  });
}

function renderAchievements() {
  const area = document.getElementById("achievementArea");
  area.innerHTML = "";

  achievements.forEach(ach => {
    const d = document.createElement("div");
    d.style.cssText = `
      padding:4px;
      margin:2px 0;
      border-radius:4px;
      background:${ach.unlocked ? '#1a4d1a' : '#2a2a2a'};
      border-left:3px solid ${ach.unlocked ? '#4caf50' : '#555'};
      font-size:11px;
      opacity:${ach.unlocked ? '1' : '0.5'};
    `;
    d.innerHTML = `${ach.icon} ${ach.name} ${ach.unlocked ? '✓' : ''}`;
    d.title = ach.desc;
    area.appendChild(d);
  });
}

// ===== İSTATİSTİK + LİG SİSTEMİ =====

// Lig tanımları
const leagues = {
  bronze: { name: "Bronz", color: "#CD7F32", lpNeeded: 100, icon: "🥉" },
  silver: { name: "Gümüş", color: "#C0C0C0", lpNeeded: 150, icon: "🥈" },
  gold: { name: "Altın", color: "#FFD700", lpNeeded: 200, icon: "🥇" },
  prismatic: { name: "Prizmatik", color: "#FF1493", lpNeeded: 999, icon: "💎" }
};

const divisions = [4, 3, 2, 1]; // Bronz 4 → Bronz 1

// Oyuncu profili
let playerProfile = {
  name: "",
  league: "bronze",
  division: 4,
  lp: 0,
  totalGames: 0,
  wins: 0,
  losses: 0,
  totalGold: 0,
  totalKills: 0,
  bestTurn: 0,
  totalDamageDealt: 0,
  totalDamageTaken: 0,
  criticalHits: 0,
  skillsUsed: 0,
  itemsBought: 0,
  augmentsCollected: 0,
  companionsUsed: []
};

// Oyun içi istatistikler (her oyun için sıfırlanır)
let gameStats = {
  damageDealt: 0,
  damageTaken: 0,
  kills: 0,
  criticalHits: 0,
  skillsUsed: 0,
  itemsBought: 0,
  augmentsCollected: 0,
  goldEarned: 0,
  turnsCompleted: 0
};

// LocalStorage'dan profil yükle
function loadPlayerProfile() {
  const saved = localStorage.getItem('roguelikeProfile');
  if (saved) {
    playerProfile = JSON.parse(saved);
  }
}

// Profili kaydet
function savePlayerProfile() {
  localStorage.setItem('roguelikeProfile', JSON.stringify(playerProfile));
}

// Lider tablosunu yükle
function loadLeaderboard() {
  const saved = localStorage.getItem('roguelikeLeaderboard');
  return saved ? JSON.parse(saved) : [];
}

// Lider tablosunu kaydet
function saveLeaderboard(leaderboard) {
  localStorage.setItem('roguelikeLeaderboard', JSON.stringify(leaderboard));
}

// Lider tablosuna oyuncuyu ekle
function updateLeaderboard() {
  let leaderboard = loadLeaderboard();
  
  // Mevcut oyuncuyu bul veya ekle
  let playerIndex = leaderboard.findIndex(p => p.name === playerProfile.name);
  
  const entry = {
    name: playerProfile.name,
    league: playerProfile.league,
    division: playerProfile.division,
    lp: playerProfile.lp,
    wins: playerProfile.wins,
    totalGames: playerProfile.totalGames,
    bestTurn: playerProfile.bestTurn,
    totalKills: playerProfile.totalKills,
    winRate: playerProfile.totalGames > 0 ? Math.floor((playerProfile.wins / playerProfile.totalGames) * 100) : 0
  };
  
  if (playerIndex >= 0) {
    leaderboard[playerIndex] = entry;
  } else {
    leaderboard.push(entry);
  }
  
  // Sıralama: Lig → Division → LP → Winrate
  leaderboard.sort((a, b) => {
    const leagueOrder = { prismatic: 4, gold: 3, silver: 2, bronze: 1 };
    if (leagueOrder[a.league] !== leagueOrder[b.league]) {
      return leagueOrder[b.league] - leagueOrder[a.league];
    }
    if (a.division !== b.division) {
      return a.division - b.division; // 1 > 4
    }
    if (a.lp !== b.lp) {
      return b.lp - a.lp;
    }
    return b.winRate - a.winRate;
  });
  
  // Top 100 oyuncuyu sakla
  leaderboard = leaderboard.slice(0, 100);
  
  saveLeaderboard(leaderboard);
  return leaderboard;
}

// Oyun başlangıcında istatistikleri sıfırla
function resetGameStats() {
  gameStats = {
    damageDealt: 0,
    damageTaken: 0,
    kills: 0,
    criticalHits: 0,
    skillsUsed: 0,
    itemsBought: 0,
    augmentsCollected: 0,
    goldEarned: 0,
    turnsCompleted: 0
  };
}

// LP kazanma/kaybetme
function updateLP(victory) {
  const lpChange = victory ? 30 : -20;
  playerProfile.lp += lpChange;
  
  // Terfi kontrolü
  const currentLeague = leagues[playerProfile.league];
  if (playerProfile.lp >= currentLeague.lpNeeded) {
    // Division atlama
    if (playerProfile.division > 1) {
      playerProfile.division--;
      playerProfile.lp = 0;
      addLog(`🎖️ Terfi! ${leagues[playerProfile.league].icon} ${leagues[playerProfile.league].name} ${playerProfile.division}`);
    } else {
      // Lig atlama
      const leagueOrder = ["bronze", "silver", "gold", "prismatic"];
      const currentIndex = leagueOrder.indexOf(playerProfile.league);
      if (currentIndex < leagueOrder.length - 1) {
        playerProfile.league = leagueOrder[currentIndex + 1];
        playerProfile.division = 4;
        playerProfile.lp = 0;
        addLog(`🏆 LİG ATLAMA! ${leagues[playerProfile.league].icon} ${leagues[playerProfile.league].name} Ligine yükseldin!`);
      } else {
        // Prizmatik'te LP sadece artar
        addLog(`💎 +${lpChange} LP! Prizmatik'te devam!`);
      }
    }
  }
  
  // Düşme kontrolü
  if (playerProfile.lp < 0 && !victory) {
    // Division düşme
    if (playerProfile.division < 4) {
      playerProfile.division++;
      playerProfile.lp = Math.floor(currentLeague.lpNeeded * 0.7);
      addLog(`⬇️ Division düştü: ${leagues[playerProfile.league].icon} ${leagues[playerProfile.league].name} ${playerProfile.division}`);
    } else {
      // Lig düşme
      const leagueOrder = ["bronze", "silver", "gold", "prismatic"];
      const currentIndex = leagueOrder.indexOf(playerProfile.league);
      if (currentIndex > 0) {
        playerProfile.league = leagueOrder[currentIndex - 1];
        playerProfile.division = 1;
        playerProfile.lp = Math.floor(leagues[playerProfile.league].lpNeeded * 0.7);
        addLog(`⬇️ Lig düştü: ${leagues[playerProfile.league].icon} ${leagues[playerProfile.league].name} ${playerProfile.division}`);
      } else {
        // Bronz 4'te LP 0'da kalır
        playerProfile.lp = 0;
      }
    }
  }
  
  savePlayerProfile();
  updateLeaderboard();
}

// Oyun sonu istatistik raporu
function showEndGameStats(victory) {
  // Profil güncelle
  playerProfile.totalGames++;
  if (victory) {
    playerProfile.wins++;
  } else {
    playerProfile.losses++;
  }
  
  playerProfile.totalGold += gameStats.goldEarned;
  playerProfile.totalKills += gameStats.kills;
  playerProfile.totalDamageDealt += gameStats.damageDealt;
  playerProfile.totalDamageTaken += gameStats.damageTaken;
  playerProfile.criticalHits += gameStats.criticalHits;
  playerProfile.skillsUsed += gameStats.skillsUsed;
  playerProfile.itemsBought += gameStats.itemsBought;
  playerProfile.augmentsCollected += gameStats.augmentsCollected;
  
  if (gameStats.turnsCompleted > playerProfile.bestTurn) {
    playerProfile.bestTurn = gameStats.turnsCompleted;
  }
  
  // Companion kaydet
  if (companion && !playerProfile.companionsUsed.includes(companion.name)) {
    playerProfile.companionsUsed.push(companion.name);
  }
  
  // LP güncelle
  updateLP(victory);
  
  savePlayerProfile();
  const leaderboard = updateLeaderboard();
  
  // Oyuncunun sıralaması
  const playerRank = leaderboard.findIndex(p => p.name === playerProfile.name) + 1;
  
  // İstatistik paneli
  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.style.zIndex = "10000";
  
  const winRate = playerProfile.totalGames > 0 ? ((playerProfile.wins / playerProfile.totalGames) * 100).toFixed(1) : 0;
  const currentLeague = leagues[playerProfile.league];
  
  overlay.innerHTML = `
    <div class="shopPanel" style="max-width:700px;max-height:90vh;overflow-y:auto;">
      <h2 style="text-align:center;margin-top:0;">${victory ? "🎉 ZAFER!" : "💀 YENİLDİN"}</h2>
      
      <!-- Lig Bilgisi -->
      <div style="text-align:center;background:linear-gradient(135deg, ${currentLeague.color}22 0%, ${currentLeague.color}44 100%);border:2px solid ${currentLeague.color};border-radius:10px;padding:15px;margin-bottom:20px;">
        <div style="font-size:48px;margin-bottom:10px;">${currentLeague.icon}</div>
        <div style="font-size:24px;font-weight:bold;color:${currentLeague.color};">
          ${currentLeague.name} ${playerProfile.division}
        </div>
        <div style="font-size:32px;font-weight:bold;color:${victory ? '#4caf50' : '#f44336'};margin:10px 0;">
          ${victory ? '+30' : '-20'} LP
        </div>
        <div style="font-size:18px;color:#aaa;">
          ${playerProfile.lp} / ${currentLeague.lpNeeded} LP
        </div>
        <div style="width:100%;height:10px;background:#333;border-radius:5px;margin-top:10px;overflow:hidden;">
          <div style="width:${(playerProfile.lp / currentLeague.lpNeeded * 100)}%;height:100%;background:${currentLeague.color};transition:width 0.5s;"></div>
        </div>
      </div>
      
      <!-- Oyun İstatistikleri -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;">
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #6b3fa0;">
          <div style="font-size:12px;color:#888;">Bu Oyun</div>
          <div style="font-size:20px;font-weight:bold;">Tur ${gameStats.turnsCompleted}/${maxTurns}</div>
        </div>
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #FFD700;">
          <div style="font-size:12px;color:#888;">Altın</div>
          <div style="font-size:20px;font-weight:bold;color:gold;">${gameStats.goldEarned}g</div>
        </div>
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #f44336;">
          <div style="font-size:12px;color:#888;">Öldürme</div>
          <div style="font-size:20px;font-weight:bold;color:#f44336;">${gameStats.kills}</div>
        </div>
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #4caf50;">
          <div style="font-size:12px;color:#888;">Verilen Hasar</div>
          <div style="font-size:20px;font-weight:bold;color:#4caf50;">${gameStats.damageDealt}</div>
        </div>
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #ff9800;">
          <div style="font-size:12px;color:#888;">Kritik Vuruş</div>
          <div style="font-size:20px;font-weight:bold;color:#ff9800;">${gameStats.criticalHits}</div>
        </div>
        <div style="background:#1a1a1a;padding:12px;border-radius:8px;border:2px solid #9c27b0;">
          <div style="font-size:12px;color:#888;">Skill Kullanımı</div>
          <div style="font-size:20px;font-weight:bold;color:#9c27b0;">${gameStats.skillsUsed}</div>
        </div>
      </div>
      
      <!-- Genel İstatistikler -->
      <div style="background:#1a1a1a;padding:15px;border-radius:10px;border:2px solid #6b3fa0;margin-bottom:20px;">
        <h3 style="margin-top:0;color:#c28b4b;">📊 Genel İstatistikler</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
          <div>Toplam Oyun: <span style="color:#4caf50;font-weight:bold;">${playerProfile.totalGames}</span></div>
          <div>Galibiyet: <span style="color:#4caf50;font-weight:bold;">${playerProfile.wins}</span></div>
          <div>Mağlubiyet: <span style="color:#f44336;font-weight:bold;">${playerProfile.losses}</span></div>
          <div>Kazanma Oranı: <span style="color:#FFD700;font-weight:bold;">${winRate}%</span></div>
          <div>En İyi Tur: <span style="color:#9c27b0;font-weight:bold;">${playerProfile.bestTurn}</span></div>
          <div>Toplam Öldürme: <span style="color:#f44336;font-weight:bold;">${playerProfile.totalKills}</span></div>
          <div>Lider Sırası: <span style="color:#FFD700;font-weight:bold;">#${playerRank}</span></div>
          <div>Toplam Altın: <span style="color:gold;font-weight:bold;">${playerProfile.totalGold}g</span></div>
        </div>
      </div>
      
      <!-- Butonlar -->
      <div style="display:flex;gap:10px;justify-content:center;">
        <button id="viewLeaderboardBtn" style="padding:12px 24px;font-size:16px;background:#FFD700;color:#111;border:2px solid #FFD700;border-radius:8px;cursor:pointer;font-weight:bold;">
          🏆 Lider Tablosu
        </button>
        <button id="restartBtn" style="padding:12px 24px;font-size:16px;background:#6b3fa0;color:white;border:2px solid gold;border-radius:8px;cursor:pointer;">
          🔄 Yeniden Başla
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  // Lider tablosu butonu
document.getElementById("viewLeaderboardBtn").onclick = () => {
  overlay.remove();
  showLeaderboard(true); // ✅ true = oyun bitti
};
  
  // Restart butonu
  document.getElementById("restartBtn").onclick = () => {
    overlay.remove();
    restartGame();
  };
}

// Lider tablosu göster
function showLeaderboard(fromEndGame = false) {
  const leaderboard = loadLeaderboard();
  
  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.style.zIndex = "10000";
  
  let html = `
    <div class="shopPanel" style="max-width:800px;max-height:90vh;overflow-y:auto;">
      <h2 style="text-align:center;margin-top:0;">🏆 Lider Tablosu</h2>
      <p style="text-align:center;color:#888;font-size:14px;">Top ${leaderboard.length} Oyuncu</p>
      
      <div style="margin-bottom:20px;">
  `;
  
  leaderboard.forEach((p, index) => {
    const league = leagues[p.league];
    const isCurrentPlayer = p.name === playerProfile.name;
    
    html += `
      <div style="display:flex;align-items:center;gap:15px;padding:12px;margin-bottom:8px;background:${isCurrentPlayer ? '#2a1a3a' : '#1a1a1a'};border:2px solid ${isCurrentPlayer ? 'gold' : '#333'};border-radius:8px;">
        <div style="font-size:24px;font-weight:bold;color:#888;min-width:40px;text-align:center;">
          ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '#' + (index + 1)}
        </div>
        <div style="font-size:32px;">${league.icon}</div>
        <div style="flex:1;">
          <div style="font-size:16px;font-weight:bold;color:${isCurrentPlayer ? 'gold' : '#fff'};">
            ${p.name}
          </div>
          <div style="font-size:12px;color:#888;">
            ${league.name} ${p.division} • ${p.lp} LP
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:14px;color:#4caf50;font-weight:bold;">${p.wins}G ${p.totalGames - p.wins}M</div>
          <div style="font-size:12px;color:#888;">${p.winRate}% WR</div>
        </div>
      </div>
    `;
  });
  
  html += `
      </div>
      <div style="text-align:center;">
        <button id="closeLeaderboardBtn" style="padding:12px 24px;font-size:16px;background:#6b3fa0;color:white;border:2px solid #6b3fa0;border-radius:8px;cursor:pointer;">
          Kapat
        </button>
      </div>
    </div>
  `;
  
  overlay.innerHTML = html;
  document.body.appendChild(overlay);
  
  document.getElementById("closeLeaderboardBtn").onclick = () => {
    overlay.remove();
    
    // ✅ Eğer oyun bitiminden geldiyse, restart ekranına dön
    if (fromEndGame) {
      showEndGameStats(player.hp > 0); // Tekrar stat ekranını göster
    }
  };
}

// Login ekranını güncelle - isim + lider tablosu
function updateLoginScreen() {
  const loginScreen = document.getElementById("loginScreen");
  loginScreen.innerHTML = `
    <h1>Roguelike Macerasına Hoş Geldin</h1>
    <p style="color:#aaa;margin-bottom:20px;">50 turu tamamla ve rankını yükselt!</p>
    
    <div id="playerInfoBox" style="background:#1a1a1a;border:2px solid #6b3fa0;border-radius:10px;padding:20px;margin-bottom:20px;max-width:400px;width:100%;"></div>
    
    <input id="playerNameInput" placeholder="Oyuncu adını gir" style="margin-bottom:15px;padding:12px;font-size:16px;width:300px;max-width:90%;" />
    
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
      <button id="startBtn" style="padding:12px 30px;font-size:16px;">▶️ Başla</button>
      <button id="viewLeaderboardBtnLogin" style="padding:12px 30px;font-size:16px;background:#FFD700;color:#111;border:2px solid #FFD700;">🏆 Lider Tablosu</button>
    </div>
  `;
  
  loadPlayerProfile();
  updatePlayerInfoBox();
  
  document.getElementById("startBtn").onclick = startGameWithName;
  
  // ✅ LİDER TABLOSU BUTONU - showEndGameStats ÇAĞIRMA!
document.getElementById("viewLeaderboardBtnLogin").onclick = () => {
  showLeaderboard(false); // ✅ false = login ekranından
};
  
  document.getElementById("playerNameInput").onkeypress = (e) => {
    if (e.key === 'Enter') startGameWithName();
  };
}

// Oyuncu bilgi kutusunu güncelle
function updatePlayerInfoBox() {
  const box = document.getElementById("playerInfoBox");
  
  if (playerProfile.name) {
    const league = leagues[playerProfile.league];
    const winRate = playerProfile.totalGames > 0 ? ((playerProfile.wins / playerProfile.totalGames) * 100).toFixed(1) : 0;
    
    box.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:18px;font-weight:bold;margin-bottom:10px;">Hoş geldin, ${playerProfile.name}!</div>
        <div style="font-size:48px;margin:15px 0;">${league.icon}</div>
        <div style="font-size:24px;font-weight:bold;color:${league.color};margin-bottom:10px;">
          ${league.name} ${playerProfile.division}
        </div>
        <div style="font-size:16px;color:#aaa;margin-bottom:10px;">
          ${playerProfile.lp} / ${league.lpNeeded} LP
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:15px;font-size:13px;">
          <div>Toplam Oyun: <span style="color:#4caf50;font-weight:bold;">${playerProfile.totalGames}</span></div>
          <div>Galibiyet: <span style="color:#4caf50;font-weight:bold;">${playerProfile.wins}</span></div>
          <div>Kazanma Oranı: <span style="color:#FFD700;font-weight:bold;">${winRate}%</span></div>
          <div>En İyi: <span style="color:#9c27b0;font-weight:bold;">Tur ${playerProfile.bestTurn}</span></div>
        </div>
      </div>
    `;
  } else {
    box.innerHTML = `
      <div style="text-align:center;color:#888;">
        <div style="font-size:48px;margin-bottom:10px;">🎮</div>
        <div>Yeni oyuncu musun?</div>
        <div style="font-size:12px;margin-top:10px;">İsmini gir ve maceraya başla!</div>
      </div>
    `;
  }
}

// İsimle oyunu başlat
function startGameWithName() {
  const nameInput = document.getElementById("playerNameInput");
  const name = nameInput.value.trim();
  
  // ✅ İSİM KONTROLÜ
  if (!name) {
    alert("Lütfen bir oyuncu adı gir!");
    return;
  }
  
  if (name !== playerProfile.name) {
    if (playerProfile.name) {
      savePlayerProfile();
    }
    
    const allProfiles = JSON.parse(localStorage.getItem('allProfiles') || '{}');
    if (allProfiles[name]) {
      playerProfile = allProfiles[name];
    } else {
      playerProfile = {
        name: name,
        league: "bronze",
        division: 4,
        lp: 0,
        totalGames: 0,
        wins: 0,
        losses: 0,
        totalGold: 0,
        totalKills: 0,
        bestTurn: 0,
        totalDamageDealt: 0,
        totalDamageTaken: 0,
        criticalHits: 0,
        skillsUsed: 0,
        itemsBought: 0,
        augmentsCollected: 0,
        companionsUsed: []
      };
    }
    
    allProfiles[name] = playerProfile;
    localStorage.setItem('allProfiles', JSON.stringify(allProfiles));
  }
  
  savePlayerProfile();
  resetGameStats();
  
  loginScreen.classList.remove("active");
  selectScreen.classList.add("active");
  rollAll();
}

// Oyunu yeniden başlat
function restartGame() {
  // State'i sıfırla (mevcut kod)
  player = null;
  enemies = [];
  selectedEnemyIndex = null;
  gold = 100;
  inventory = {};
  passiveItems = [];
  purchasedItems = [];
  selectedAugments = [];
  currentTurn = 1;
  companion = null;
  isDefending = false;
  leviCritTriggered = false;
  gojoHitsRemaining = 3;
  berserkerTurnsLeft = 0;
  narutoRageActive = false;
  rerollUsed = [false, false, false];
  currentChoices = [];
  selectedIndex = null;
  shopCost = 0;
  lastFreeShopTurn = 0;

  achievements.forEach(ach => {
    ach.unlocked = false;
    if (ach.critCount !== undefined) ach.critCount = 0;
    if (ach.skillCount !== undefined) ach.skillCount = 0;
  });

  const logPanel = document.getElementById("logPanel");
  logPanel.innerHTML = "";

  // Yeni oyun istatistiklerini sıfırla
  resetGameStats();

  gameScreen.classList.remove("active");
  selectScreen.classList.add("active");
  rollAll();
}

// ===== ENTEGRASYON NOKTALARI =====

// 1. dealDamage fonksiyonuna ekle:
function trackDamageDealt(damage) {
  gameStats.damageDealt += damage;
}

function trackDamageTaken(damage) {
  gameStats.damageTaken += damage;
}

function trackCritical() {
  gameStats.criticalHits++;
}

function trackSkillUse() {
  gameStats.skillsUsed++;
}

// 2. onEnemyDefeated fonksiyonuna ekle:
function trackKill() {
  gameStats.kills++;
}

// 3. buyItem fonksiyonuna ekle:
function trackItemBought() {
  gameStats.itemsBought++;
}

// 4. augment seçiminde ekle:
function trackAugment() {
  gameStats.augmentsCollected++;
}

// 5. Gold kazanımında ekle:
function trackGold(amount) {
  gameStats.goldEarned += amount;
}

// 6. Tur tamamlandığında:
function trackTurnComplete() {
  gameStats.turnsCompleted = currentTurn - 1;
}

// ===== SAYFA YÜKLENDİĞİNDE =====
// Eski startBtn onclick yerine yeni sistem kullan
document.addEventListener('DOMContentLoaded', () => {
  updateLoginScreen();

});

function showFloatingActionPanel(enemy, laneIndex, enemyIndex) {
  hideFloatingActionPanel();
  
  // ✅ MOBİL BAŞLIK GÖSTER
  if (window.innerWidth <= 768) {
    const header = document.getElementById('mobileBattleHeader');
    const portrait = document.getElementById('mobileBattlePortrait');
    const name = document.getElementById('mobileBattleName');
    const hpBar = document.getElementById('mobileBattleHp');
    const hpText = document.getElementById('mobileBattleHpText');
    const manaBar = document.getElementById('mobileBattleMana');
    const manaText = document.getElementById('mobileBattleManaText');
    
    if (header && player) {
      portrait.src = player.img;
      name.textContent = player.name;
      hpBar.style.width = (player.hp / player.maxHp * 100) + '%';
      hpText.textContent = `❤️ ${player.hp}/${player.maxHp}`;
      manaBar.style.width = (player.mana / player.maxMana * 100) + '%';
      manaText.textContent = `💙 ${player.mana}/${player.maxMana}`;
      header.classList.add('active');
    }
  }
  
  const overlay = document.createElement('div');
  overlay.className = 'floating-action-overlay';
  overlay.id = 'floatingActionOverlay';
  overlay.onclick = hideFloatingActionPanel;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
  
  const panel = document.createElement('div');
  panel.className = 'floating-action-panel';
  panel.id = 'floatingActionPanel';
  
  let skillCost = player.skillCost;
  if (player.name === "Fern") skillCost = Math.floor(skillCost * 0.8);
  if (companion && companion.bonus.type === "intelligence") skillCost = Math.floor(skillCost * 0.80);
  if (player.prismaticMana > 0) skillCost = Math.floor(skillCost * (1 - player.prismaticMana));
  
  const canUseSkill = player.mana >= skillCost;
  
  panel.innerHTML = `
    <div class="floating-action-panel-header">
      <div class="floating-action-panel-title">🎯 Hedef Seçildi</div>
    </div>
    <div class="floating-action-buttons">
      <button class="floating-action-btn attack" id="floatingAttackBtn">
        <div class="btn-icon">⚔️</div>
        <div class="btn-label">Saldır</div>
      </button>
      <button class="floating-action-btn skill" id="floatingSkillBtn" ${!canUseSkill ? 'disabled' : ''}>
        <div class="btn-icon">🔮</div>
        <div class="btn-label">Skill</div>
        ${skillCost > 0 ? `<span class="cost-badge">${skillCost}</span>` : ''}
      </button>
      <button class="floating-action-btn defend" id="floatingDefendBtn">
        <div class="btn-icon">🛡️</div>
        <div class="btn-label">Savun</div>
      </button>
    </div>
  `;
  
  document.body.appendChild(panel);
  setTimeout(() => panel.classList.add('active'), 10);
  
  document.getElementById('floatingAttackBtn').onclick = () => {
    hideFloatingActionPanel();
    performAttack();
  };
  
  document.getElementById('floatingSkillBtn').onclick = () => {
    if (canUseSkill) {
      hideFloatingActionPanel();
      performSkill();
    }
  };
  
  document.getElementById('floatingDefendBtn').onclick = () => {
    hideFloatingActionPanel();
    performDefend();
  };
}

// ✅ FLOATING PANEL KAPAT
function hideFloatingActionPanel() {
  const panel = document.getElementById('floatingActionPanel');
  const overlay = document.getElementById('floatingActionOverlay');
  const header = document.getElementById('mobileBattleHeader');
  
  if (panel) {
    panel.classList.remove('active');
    setTimeout(() => panel.remove(), 300);
  }
  
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
  
  // ✅ MOBİL BAŞLIK GİZLE
  if (header) {
    header.classList.remove('active');
  }
}

// ✅ SALDIRI GERÇEKLEŞTIR
function performAttack() {
  if (lanes[selectedLane].length === 0) {
    addLog("⚠️ Bu koridor boş!");
    return;
  }
  
  isDefending = false;
  const enemyBeforeHp = lanes[selectedLane][0].hp;
  
  dealDamage(player, lanes[selectedLane][0], false);
  
  const damageDealt = enemyBeforeHp - lanes[selectedLane][0].hp;
  highlightSelectedLane();
  showAttackAnimation(selectedLane, 0, damageDealt);

  if (lanes[selectedLane][0].hp <= 0) {
    onEnemyDefeated(selectedLane, 0);
  } else {
    enemyTurn();
    nextTurn();
  }
}

// ✅ SKILL GERÇEKLEŞTIR
function performSkill() {
  if (lanes[selectedLane].length === 0) {
    addLog("⚠️ Bu koridor boş!");
    return;
  }
  
  let cost = player.skillCost;
  if (player.name === "Fern") cost = Math.floor(cost * 0.8);
  if (companion && companion.bonus.type === "intelligence") cost = Math.floor(cost * 0.80);
  if (player.prismaticMana > 0) cost = Math.floor(cost * (1 - player.prismaticMana));

  if (player.mana < cost) {
    addLog("⚠️ Yeterli mana yok!");
    return;
  }

  isDefending = false;
  player.mana -= cost;
  trackSkillUse();

  if (player.name === "Kara Kedi") {
    addLog(`😼 KEDİ KRİZİM! Koridor ${selectedLane + 1} temizlendi!`);
    
    lanes[selectedLane].forEach((enemy, idx) => {
      showAttackAnimation(selectedLane, idx, enemy.hp);
      gold += enemy.gold;
      trackKill();
      trackGold(enemy.gold);
    });
    
    lanes[selectedLane] = [];
  } else {
    const enemyBeforeHp = lanes[selectedLane][0].hp;
    
    dealDamage(player, lanes[selectedLane][0], true);
    
    const damageDealt = enemyBeforeHp - lanes[selectedLane][0].hp;
    highlightSelectedLane();
    showAttackAnimation(selectedLane, 0, damageDealt);

    if (lanes[selectedLane][0].hp <= 0) {
      onEnemyDefeated(selectedLane, 0);
    } else {
      enemyTurn();
      nextTurn();
    }
  }
  
  let allEmpty = lanes.every(lane => lane.length === 0);
  if (allEmpty) {
    currentTurn++;
    trackTurnComplete();
    
    if (berserkerTurnsLeft > 0) {
      berserkerTurnsLeft--;
      if (berserkerTurnsLeft === 0) addLog("😌 Berserker bitti.");
    }
    
    updateUI();
    startBattle();
  } else {
    renderBattle();
    updateUI();
  }
}

// ✅ SAVUNMA GERÇEKLEŞTIR
function performDefend() {
  isDefending = true;
  addLog("🛡️ Savunma pozisyonu aldın!");
  
  enemyTurn();
  nextTurn();
}

// ✅ Mevcut desktop butonları (sadece desktop'ta çalışacak)
document.getElementById("attackBtn").onclick = performAttack;
document.getElementById("skillBtn").onclick = performSkill;
document.getElementById("defendBtn").onclick = performDefend;

// ========== MOBİL DRAWER FONKSİYONLARI ==========

function toggleCharacterDrawer() {
  const drawer = document.getElementById('characterDrawer');
  const btn = document.getElementById('characterDrawerBtn');
  
  if (!drawer || !btn) return;
  
  if (drawer.classList.contains('active')) {
    drawer.classList.remove('active');
    btn.classList.remove('active');
  } else {
    drawer.classList.add('active');
    btn.classList.add('active');
    updateDrawerContent();
  }
}

function updateDrawerContent() {
  const drawerContent = document.getElementById('drawerContent');
  
  if (!player || !drawerContent) {
    if (drawerContent) {
      drawerContent.innerHTML = '<p style="color:#888;text-align:center;padding:20px;">Oyun başlamadı</p>';
    }
    return;
  }
  
  let html = `
    <div class="drawer-character-section">
      <img src="${player.img}" class="drawer-portrait" alt="${player.name}">
      <div class="drawer-bars-stats">
        <div style="font-size:16px;font-weight:bold;color:gold;margin-bottom:8px;">${player.name}</div>
        
        <div class="drawer-bar-container">
          <div class="drawer-bar-label">❤️ ${player.hp} / ${player.maxHp}</div>
          <div class="drawer-bar">
            <div class="drawer-bar-fill drawer-hp-fill" style="width:${(player.hp/player.maxHp*100)}%;"></div>
          </div>
        </div>
        
        <div class="drawer-bar-container">
          <div class="drawer-bar-label">💙 ${player.mana} / ${player.maxMana}</div>
          <div class="drawer-bar">
            <div class="drawer-bar-fill drawer-mana-fill" style="width:${(player.mana/player.maxMana*100)}%;"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="drawer-stats">
      <div class="drawer-stat-item">⚔️ AD<br><span class="drawer-stat-value">${player.ad}</span></div>
      <div class="drawer-stat-item">🔮 AP<br><span class="drawer-stat-value">${player.ap}</span></div>
      <div class="drawer-stat-item">🛡️ Zırh<br><span class="drawer-stat-value">${player.armor}</span></div>
      <div class="drawer-stat-item">🔰 MR<br><span class="drawer-stat-value">${player.mr}</span></div>
      <div class="drawer-stat-item">💥 Kritik<br><span class="drawer-stat-value">${player.critChance}%</span></div>
      <div class="drawer-stat-item">💉 Can Çalma<br><span class="drawer-stat-value">${Math.floor(player.lifesteal*100)}%</span></div>
    </div>
    
    <div class="drawer-items">
      <div class="drawer-section-title">🎒 Eşyalar</div>
      <div class="drawer-item-grid">
  `;
  
  passiveItems.forEach(item => {
    html += `<div class="drawer-item-slot passive" title="${item.name}"><img src="${item.img}" alt="${item.name}"></div>`;
  });
  
  Object.values(inventory).forEach(entry => {
    html += `
      <div class="drawer-item-slot" title="${entry.item.name}">
        <img src="${entry.item.img}" alt="${entry.item.name}">
        ${entry.count > 1 ? `<span class="stack-count">${entry.count}</span>` : ''}
      </div>`;
  });
  
  html += `</div></div><div class="drawer-features"><div class="drawer-section-title">✨ Özellikler</div>`;
  
  html += `
    <div class="drawer-feature-item passive">
      <img src="${player.passive.icon}" class="drawer-feature-icon">
      <div class="drawer-feature-text">
        <div class="drawer-feature-name">🎭 Karakter Pasifi</div>
        <div class="drawer-feature-desc">${player.passive.text}</div>
      </div>
    </div>`;
  
  if (companion) {
    html += `
      <div class="drawer-feature-item companion">
        <img src="${companion.img}" class="drawer-feature-icon">
        <div class="drawer-feature-text">
          <div class="drawer-feature-name">🎖️ ${companion.name}</div>
          <div class="drawer-feature-desc">${companion.bonus.text}</div>
        </div>
      </div>`;
  }
  
  selectedAugments.forEach(augId => {
    let aug = null;
    for (let tier in augments) {
      const found = augments[tier].find(a => a.id === augId);
      if (found) { aug = found; break; }
    }
    
    if (aug) {
      html += `
        <div class="drawer-feature-item augment">
          <div class="drawer-feature-icon" style="display:flex;align-items:center;justify-content:center;font-size:24px;background:#2a2a2a;">${aug.icon}</div>
          <div class="drawer-feature-text">
            <div class="drawer-feature-name">✨ ${aug.name}</div>
            <div class="drawer-feature-desc">${aug.desc}</div>
          </div>
        </div>`;
    }
  });
  
  html += `</div>`;
  drawerContent.innerHTML = html;
}

function updateCharacterDrawerVisibility() {
  const btn = document.getElementById('characterDrawerBtn');
  const logBtn = document.getElementById('logToggleBtn');
  
  if (!btn || !logBtn) return;
  
  if (window.innerWidth <= 768) {
    if (player && gameScreen.classList.contains('active')) {
      btn.style.display = 'flex';
      logBtn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
      logBtn.style.display = 'none';
    }
  } else {
    btn.style.display = 'none';
    logBtn.style.display = 'none';
  }
}

document.addEventListener('click', (e) => {
  const tooltip = document.getElementById('tooltip');
  if (tooltip && 
      tooltip.style.display === 'block' && 
      !e.target.closest('.shopItem') && 
      !e.target.closest('.itemSlot')) {
    hideTooltip();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const drawerBtn = document.getElementById('characterDrawerBtn');
  const logBtn = document.getElementById('logToggleBtn');
  const drawer = document.getElementById('characterDrawer');
  const rightPanel = document.querySelector('.rightPanel');
  
  // ✅ KARAKTER DRAWER TOGGLE
  if (drawerBtn) {
    drawerBtn.onclick = (e) => {
      e.stopPropagation();
      toggleCharacterDrawer();
    };
  }
  
  // ✅ DRAWER DIŞINA TIKLANINCA KAPAT
  if (drawer) {
    drawer.onclick = (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('active');
        if (drawerBtn) drawerBtn.classList.remove('active');
      }
    };
  }
  
  // ✅ LOG TOGGLE
  if (logBtn && rightPanel) {
    logBtn.onclick = (e) => {
      e.stopPropagation();
      rightPanel.classList.toggle('active');
      logBtn.classList.toggle('active');
      logBtn.textContent = rightPanel.classList.contains('active') ? '✖️' : '📜';
    };
    
    // ✅ LOG DIŞINA TIKLANINCA KAPAT
    document.addEventListener('click', (e) => {
      if (rightPanel.classList.contains('active') && 
          !rightPanel.contains(e.target) && 
          e.target !== logBtn) {
        rightPanel.classList.remove('active');
        logBtn.classList.remove('active');
        logBtn.textContent = '📜';
      }
    });
  }
  
  // ✅ EKRAN BOYUTU DEĞİŞİNCE KONTROL ET
  window.addEventListener('resize', updateCharacterDrawerVisibility);
  updateCharacterDrawerVisibility();
  
  // ✅ LOGİN EKRANI
  updateLoginScreen();
});
