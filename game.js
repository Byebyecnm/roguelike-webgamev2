// ==== DATA ====

const characters = [
  { name:"Frieren", img:"images/characters/frieren.png",
    hp:60, mana:120, dmg:40, armor:20, mr:40,
    critChance: 0, critMult: 2.0,
    skillMult:1.7, skillCost:30,
    passive:{ icon:"images/passives/mage.png", text:"Büyü hasarı %20 artar." }
  },
  { name:"Fern", img:"images/characters/fern.png",
    hp:70, mana:110, dmg:45, armor:25, mr:35,
    critChance: 0, critMult: 2.0,
    skillMult:1.6, skillCost:25,
    passive:{ icon:"images/passives/mana.png", text:"Mana harcaması %20 azalır." }
  },
  { name:"Levi", img:"images/characters/levi.png",
    hp:90, mana:30, dmg:85, armor:45, mr:20,
    critChance: 0, critMult: 2.0,
    skillMult:1.5, skillCost:20,
    passive:{ icon:"images/passives/crit.png", text:"İlk kritik vurduğunda kritik şansı %10 artar." }
  },
  { name:"Eren", img:"images/characters/eren.png",
    hp:120, mana:20, dmg:80, armor:50, mr:25,
    critChance: 0, critMult: 2.0,
    skillMult:1.4, skillCost:15,
    passive:{ icon:"images/passives/rage.png", text:"Can azaldıkça hasar artar." }
  },
  { name:"Light Yagami", img:"images/characters/light.png",
    hp:50, mana:140, dmg:35, armor:15, mr:45,
    critChance: 0, critMult: 2.5,
    skillMult:2.0, skillCost:40,
    passive:{ icon:"images/passives/death.png", text:"Kritik vurduğunda düşmanın maksimum canının %5'i kadar ekstra hasar verir." }
  },
  { name:"Gojo Satoru", img:"images/characters/gojo.png",
    hp:80, mana:100, dmg:60, armor:30, mr:50,
    critChance: 0, critMult: 2.0,
    skillMult:1.8, skillCost:35,
    passive:{ icon:"images/passives/infinity.png", text:"İlk 3 düşman saldırısında aldığı hasar %50 azalır." }
  },
  { name:"Saitama", img:"images/characters/saitama.png",
    hp:150, mana:10, dmg:100, armor:60, mr:30,
    critChance: 0, critMult: 3.0,
    skillMult:1.2, skillCost:5,
    passive:{ icon:"images/passives/punch.png", text:"Normal saldırıları %20 ihtimalle anında düşmanı öldürür (Boss hariç)." }
  },
  { name:"Naruto", img:"images/characters/naruto.png",
    hp:100, mana:80, dmg:70, armor:40, mr:35,
    critChance: 0, critMult: 2.0,
    skillMult:1.6, skillCost:25,
    passive:{ icon:"images/passives/kyuubi.png", text:"HP %30'un altına düştüğünde tüm istatistikler %30 artar." }
  },
  { name:"Guts", img:"images/characters/guts.png",
    hp:130, mana:15, dmg:90, armor:55, mr:20,
    critChance: 0, critMult: 2.2,
    skillMult:1.3, skillCost:10,
    passive:{ icon:"images/passives/berserker.png", text:"Her vuruşta %5 ihtimalle öfke moduna girer ve 3 tur boyunca hasar %40 artar." }
  },
];

const companions = [
  { name:"Himmel", img:"images/characters/himmel.png",
    bonus:{ type:"dmg", value:15, text:"Hasar +15" }
  },
  { name:"Heiter", img:"images/characters/heiter.png",
    bonus:{ type:"heal", value:5, text:"Her turda +5 HP rejenerasyon" }
  },
  { name:"Eisen", img:"images/characters/eisen.png",
    bonus:{ type:"armor", value:20, text:"Zırh +20" }
  },
  { name:"Stark", img:"images/characters/stark.png",
    bonus:{ type:"crit", value:10, text:"Kritik şansı +10%" }
  },
  { name:"Komutan Erwin", img:"images/characters/erwin.png",
    bonus:{ type:"strategy", value:20, text:"Tüm istatistikler +10%" }
  },
  { name:"Mikasa Ackerman", img:"images/characters/mikasa.png",
    bonus:{ type:"speed", value:15, text:"Saldırı başına %15 ihtimalle ekstra vuruş" }
  },
  { name:"L", img:"images/characters/l.png",
    bonus:{ type:"intelligence", value:25, text:"Skill hasarı %25 artar ve skill maliyeti %15 azalır" }
  },
  { name:"Shinigami", img:"images/characters/shinigami.png",
    bonus:{ type:"death", value:10, text:"Düşman öldüğünde %20 HP ve Mana restore" }
  },
  { name:"Rock Lee", img:"images/characters/lee.png",
    bonus:{ type:"taijutsu", value:20, text:"Normal saldırı hasarı %30 artar" }
  },
];

const shopItems = [
  { id:"hp_pot", name:"Can İksiri", img:"images/items/iksir.png", price:20, usable:true, stackable:true,
    desc:"30 HP restore eder.",
    use:()=>{ player.hp = Math.min(player.maxHp, player.hp + 30); } },
  { id:"mana_pot", name:"Mana İksiri", img:"images/items/manapot.png", price:20, usable:true, stackable:true,
    desc:"30 Mana restore eder.",
    use:()=>{ player.mana = Math.min(player.maxMana, player.mana + 30); } },
  { id:"staff", name:"Luden", img:"images/items/luden.png", price:60, usable:false,
    desc:"Hasar +20 verir.",
    passive:()=>{ player.dmg += 20; } },
  { id:"armor", name:"Çivili Zırh", img:"images/items/civili.png", price:50, usable:false,
    desc:"Zırh +15 verir.",
    passive:()=>{ player.armor += 15; } },
  { id:"crit_item", name:"Infinity Edge", img:"images/items/infinity.png", price:80, usable:false,
    desc:"Kritik şansı +15% verir.",
    passive:()=>{ player.critChance += 15; } },
  { id:"armor+tear", name:"Ruh Gömleği", img:"images/items/ruhgomlek.png", price:150, usable:false,
    desc:"Zırh +15, Maksimum Mana +30 ve Maksimum Can +20 verir.",
    passive:()=>{ 
      player.armor += 15; 
      player.maxMana += 30; 
      player.mana += 30;
      player.maxHp += 20;
      player.hp += 20;
    } },
  { id:"vampiric", name:"Kanlı Kılıç", img:"images/items/vampiric.png", price:100, usable:false,
    desc:"Verdiğin hasarın %20'si kadar can kazanırsın.",
    passive:()=>{ player.lifesteal = 0.2; } },
  { id:"warmog", name:"Warmog's Armor", img:"images/items/warmog.png", price:200, usable:false,
    desc:"Maksimum Can +60 verir ve her tur başında +10 HP rejenerasyon.",
    passive:()=>{ 
      player.maxHp += 60; 
      player.hp += 60;
      player.warmog = true;
    } },
  { id:"rabadons", name:"Rabadon's Deathcap", img:"images/items/rabadon.png", price:180, usable:false,
    desc:"Maksimum Mana +50, Büyü Direnci +15 ve Skill hasarı %15 artar.",
    passive:()=>{ 
      player.maxMana += 50; 
      player.mana += 50;
      player.mr += 15;
      player.rabadon = true;
    } },
  { id:"giants_belt", name:"Giant's Belt", img:"images/items/belt.png", price:70, usable:false,
    desc:"Maksimum Can +40 verir.",
    passive:()=>{ 
      player.maxHp += 40; 
      player.hp += 40;
    } },
  { id:"tear", name:"Tear of Goddess", img:"images/items/tear.png", price:60, usable:false,
    desc:"Maksimum Mana +40 verir.",
    passive:()=>{ 
      player.maxMana += 40; 
      player.mana += 40;
    } },
  { id:"thornmail", name:"Thornmail", img:"images/items/thornmail.png", price:120, usable:false,
    desc:"Zırh +25 verir ve aldığın hasarın %15'ini düşmana geri yansıtır.",
    passive:()=>{ 
      player.armor += 25;
      player.thornmail = 0.15;
    } },
];

const enemyTypes = [
  { name:"Goblin", hp:60, dmg:15, armor:10, mr:5, gold:25, img:"images/enemy.png" },
  { name:"Ork", hp:90, dmg:25, armor:20, mr:10, gold:35, img:"images/enemy.png" },
  { name:"Şövalye", hp:120, dmg:30, armor:35, mr:15, gold:45, img:"images/enemy.png" },
  { name:"Karanlık Büyücü", hp:80, dmg:40, armor:15, mr:40, gold:50, img:"images/enemy.png" },
  { name:"Dev", hp:150, dmg:45, armor:30, mr:20, gold:60, img:"images/enemy.png" },
  { name:"Ejderha", hp:200, dmg:55, armor:40, mr:30, gold:100, img:"images/enemy.png" },
];

// ==== STATE ====

let player = null;
let enemies = [];
let selectedEnemyIndex = null;
let gold = 100;
let inventory = {};
let passiveItems = [];
let purchasedItems = [];

let currentTurn = 1;
let maxTurns = 50;
let companion = null;
let isDefending = false;
let leviCritTriggered = false;
let gojoHitsRemaining = 3; // Gojo pasifi
let berserkerTurnsLeft = 0; // Guts pasifi
let narutoRageActive = false; // Naruto pasifi

let rerollUsed = [false, false, false];
let currentChoices = [];
let selectedIndex = null;

// ==== DOM ====

const loginScreen = document.getElementById("loginScreen");
const selectScreen = document.getElementById("characterSelectScreen");
const gameScreen = document.getElementById("gameScreen");

const cardRow = document.getElementById("cardRow");
const confirmBtn = document.getElementById("confirmBtn");

// ==== START ====

document.getElementById("startBtn").onclick = () => {
  loginScreen.classList.remove("active");
  selectScreen.classList.add("active");
  rollAll();
};

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
      <div class="charStats">Hasar:${c.dmg} | Zırh:${c.armor}</div>
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
  player = JSON.parse(JSON.stringify(char));
  player.maxHp = player.hp;
  player.maxMana = player.mana;
  player.baseDmg = player.dmg;
  player.lifesteal = 0;
  player.warmog = false;
  player.rabadon = false;
  player.thornmail = 0;

  selectScreen.classList.remove("active");
  gameScreen.classList.add("active");

  updateUI();
  renderPassive();
  renderInventory();
  startBattle();
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
  `Hasar: ${player.dmg} | Kritik: %${player.critChance}<br>
   Zırh: ${player.armor} | Büyü Direnci: ${player.mr}`;
  document.getElementById("goldText").textContent = gold;
  document.getElementById("turnText").textContent = `Tur: ${currentTurn}/${maxTurns}`;

  if (companion) {
    document.getElementById("companionArea").innerHTML = `
      <img src="${companion.img}" width="48" style="border-radius:50%;">
      <div style="font-size:11px;">${companion.name}</div>
      <div style="font-size:10px;color:#aaa;">${companion.bonus.text}</div>
    `;
  }
}

function renderPassive() {
  const area = document.getElementById("passiveArea");
  area.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <img src="${player.passive.icon}" width="32">
      <div style="font-size:11px;">${player.passive.text}</div>
    </div>
  `;
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

document.getElementById("openShopBtn").onclick = openShop;

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
        `<button ${canBuy ? "" : "disabled"}>Satın Al</button>`}
    `;

    attachItemHover(d, it);

    const btn = d.querySelector("button");
    if (btn && canBuy) {
      btn.onclick = () => buyItem(it, overlay);
    }

    grid.appendChild(d);
  });

  overlay.querySelector("#closeShopBtn").onclick = () => overlay.remove();
}

function buyItem(item, overlay) {
  if (gold < item.price) return;

  gold -= item.price;

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
  openShop();
}

// ==== BATTLE ====

function startBattle() {
  if (currentTurn > maxTurns) {
    addLog("🏆 TEBRİKLER! Tüm turları tamamladınız!");
    endGame(true);
    return;
  }

  if (currentTurn === 25 && !companion) {
    showCompanionSelect();
    return;
  }

  let enemyCount = 1;
  if (currentTurn >= 10) enemyCount = Math.random() < 0.3 ? 2 : 1;
  if (currentTurn >= 20) enemyCount = Math.random() < 0.4 ? 2 : 1;
  if (currentTurn >= 30) enemyCount = Math.random() < 0.5 ? Math.random() < 0.3 ? 3 : 2 : 1;
  if (currentTurn >= 40) enemyCount = Math.random() < 0.6 ? Math.random() < 0.4 ? 3 : 2 : 1;

  enemies = [];
  
  for (let i = 0; i < enemyCount; i++) {
    let enemyIndex = Math.min(Math.floor(currentTurn / 8), enemyTypes.length - 1);
    let template = enemyTypes[enemyIndex];
    let enemy = JSON.parse(JSON.stringify(template));
    
    let boost = Math.floor(currentTurn / 5);
    enemy.hp += boost * 15;
    enemy.dmg += boost * 5;
    enemy.armor += boost * 3;
    
    enemies.push(enemy);
  }

  selectedEnemyIndex = 0;
  
  if (enemyCount > 1) {
    addLog(`⚔️ Tur ${currentTurn}: ${enemyCount} düşmanla karşılaşıyorsun!`);
  } else {
    addLog(`⚔️ Tur ${currentTurn}: ${enemies[0].name} ile karşılaşıyorsun!`);
  }
  
  renderBattle();
}

function renderBattle() {
  const area = document.getElementById("battleArea");
  area.innerHTML = "";

  enemies.forEach((enemy, index) => {
    const div = document.createElement("div");
    div.className = `enemyCard ${index === selectedEnemyIndex ? 'selected' : ''}`;
    div.innerHTML = `
      <div class="enemyName">${enemy.name}</div>
      <img src="${enemy.img}">
      <div class="enemyStats">
        HP: ${enemy.hp}<br>
        Hasar: ${enemy.dmg}
      </div>
    `;
    
    div.onclick = () => {
      selectedEnemyIndex = index;
      renderBattle();
    };
    
    area.appendChild(div);
  });
}

function showCompanionSelect() {
  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.innerHTML = `
    <div class="shopPanel">
      <h2>🎖️ Yardımcı Seç</h2>
      <p style="text-align:center;color:#aaa;font-size:14px;">Tur 25 Ödülü</p>
      <div id="companionGrid"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const grid = overlay.querySelector("#companionGrid");

  companions.forEach(comp => {
    const d = document.createElement("div");
    d.className = "charCard";
    d.innerHTML = `
      <img src="${comp.img}">
      <div><b>${comp.name}</b></div>
      <div style="font-size:12px;margin-top:8px;">${comp.bonus.text}</div>
    `;
    d.onclick = () => {
      companion = comp;
      
      if (comp.bonus.type === "dmg") player.dmg += comp.bonus.value;
      if (comp.bonus.type === "armor") player.armor += comp.bonus.value;
      if (comp.bonus.type === "crit") player.critChance += comp.bonus.value;
      
      // Komutan Erwin - tüm statları %10 artır
      if (comp.bonus.type === "strategy") {
        player.dmg = Math.floor(player.dmg * 1.1);
        player.armor = Math.floor(player.armor * 1.1);
        player.mr = Math.floor(player.mr * 1.1);
        player.maxHp = Math.floor(player.maxHp * 1.1);
        player.hp = Math.floor(player.hp * 1.1);
      }
      
      addLog(`🎖️ ${comp.name} ekibe katıldı!`);
      overlay.remove();
      updateUI();
      startBattle();
    };
    grid.appendChild(d);
  });
}

// ==== COMBAT ====

document.getElementById("attackBtn").onclick = () => {
  if (enemies.length === 0) return;
  
  isDefending = false;
  dealDamage(player, enemies[selectedEnemyIndex], false);

  if (enemies[selectedEnemyIndex].hp <= 0) {
    onEnemyDefeated(selectedEnemyIndex);
    if (enemies.length === 0) return;
  }

  enemyTurn();
  nextTurn();
};

document.getElementById("skillBtn").onclick = () => {
  if (enemies.length === 0) return;
  
  let cost = player.skillCost;
  
  if (player.name === "Fern") {
    cost = Math.floor(cost * 0.8);
  }

  // L companion - skill maliyeti %15 azalır
  if (companion && companion.bonus.type === "intelligence") {
    cost = Math.floor(cost * 0.85);
  }

  if (player.mana < cost) {
    addLog("⚠️ Yeterli mana yok!");
    return;
  }

  isDefending = false;
  player.mana -= cost;

  dealDamage(player, enemies[selectedEnemyIndex], true);

  if (enemies[selectedEnemyIndex].hp <= 0) {
    onEnemyDefeated(selectedEnemyIndex);
    if (enemies.length === 0) return;
  }

  enemyTurn();
  nextTurn();
};

document.getElementById("defendBtn").onclick = () => {
  isDefending = true;
  addLog("🛡️ Savunma pozisyonu aldın!");
  
  enemyTurn();
  nextTurn();
};

function dealDamage(attacker, defender, isMagic=false) {
  let base = attacker.dmg;

  // Guts Berserker modu
  if (attacker === player && berserkerTurnsLeft > 0) {
    base = Math.floor(base * 1.4);
  }

  // Rock Lee companion - normal saldırı bonusu
  if (attacker === player && !isMagic && companion && companion.bonus.type === "taijutsu") {
    base = Math.floor(base * 1.3);
  }

  // Skill ise
  if (isMagic && attacker === player) {
    base = Math.floor(base * player.skillMult);
    
    // Frieren pasifi
    if (player.name === "Frieren") {
      base = Math.floor(base * 1.2);
    }

    // Rabadon's Deathcap
    if (player.rabadon) {
      base = Math.floor(base * 1.15);
    }

    // L companion - skill hasarı artışı
    if (companion && companion.bonus.type === "intelligence") {
      base = Math.floor(base * 1.25);
    }
  }

  // Eren pasifi
  if (attacker === player && player.name === "Eren") {
    let hpPercent = player.hp / player.maxHp;
    let rageBonus = Math.floor((1 - hpPercent) * 40);
    base += rageBonus;
  }

  // Naruto pasifi - HP %30 altında
  if (attacker === player && player.name === "Naruto") {
    let hpPercent = player.hp / player.maxHp;
    if (hpPercent <= 0.3 && !narutoRageActive) {
      narutoRageActive = true;
      player.dmg = Math.floor(player.dmg * 1.3);
      player.armor = Math.floor(player.armor * 1.3);
      player.mr = Math.floor(player.mr * 1.3);
      addLog("🦊 Naruto'nun Kyuubi gücü uyanıyor! Tüm statlar %30 arttı!");
      updateUI();
    }
  }

  // Kritik kontrolü
  let isCrit = Math.random() * 100 < attacker.critChance;
  if (isCrit) {
    base = Math.floor(base * attacker.critMult);
    
    // Levi pasifi
    if (attacker === player && player.name === "Levi" && !leviCritTriggered) {
      leviCritTriggered = true;
      player.critChance += 10;
      addLog("⚡ Levi'nin pasifi aktif oldu! Kritik şansı +10%");
      updateUI();
    }

    // Light Yagami pasifi - kritik vurduğunda max HP'nin %5'i ekstra hasar
    if (attacker === player && player.name === "Light Yagami") {
      let deathNote = Math.floor(defender.hp * 0.05);
      base += deathNote;
      addLog("📓 Death Note etkisi! +" + deathNote + " ekstra hasar!");
    }
  }

  let defense = isMagic ? defender.mr : defender.armor;
  let finalDmg = Math.max(1, base - defense);

  // Saitama'nın one punch pasifi
  if (attacker === player && player.name === "Saitama" && !isMagic && currentTurn < 40) {
    if (Math.random() < 0.2) {
      finalDmg = defender.hp;
      addLog("👊 ONE PUUUUNCH! Anında öldürme!");
    }
  }

  defender.hp -= finalDmg;

  // Lifesteal
  if (attacker === player && player.lifesteal > 0) {
    let heal = Math.floor(finalDmg * player.lifesteal);
    player.hp = Math.min(player.maxHp, player.hp + heal);
    addLog(`💉 ${heal} can emildi!`);
  }

  // Mikasa companion - %15 ihtimalle ekstra vuruş
  if (attacker === player && companion && companion.bonus.type === "speed") {
    if (Math.random() < 0.15) {
      let extraDmg = Math.floor(base * 0.5);
      defender.hp -= extraDmg;
      addLog(`⚔️ Mikasa'nın hızı! Ekstra ${extraDmg} hasar!`);
    }
  }

  // Guts berserker mod kontrolü
  if (attacker === player && player.name === "Guts" && berserkerTurnsLeft === 0) {
    if (Math.random() < 0.05) {
      berserkerTurnsLeft = 3;
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

  return finalDmg;
}

function enemyTurn() {
  enemies.forEach(enemy => {
    let base = enemy.dmg;
    let finalDmg = Math.max(1, base - player.armor);

    if (isDefending) {
      finalDmg = Math.floor(finalDmg / 2);
    }

    // Gojo pasifi - ilk 3 vuruşta %50 hasar azaltma
    if (player.name === "Gojo Satoru" && gojoHitsRemaining > 0) {
      finalDmg = Math.floor(finalDmg / 2);
      gojoHitsRemaining--;
      addLog(`♾️ Gojo'nun Infinity savunması! Hasar yarıya indi. (${gojoHitsRemaining} kalan)`);
    }

    player.hp -= finalDmg;

    // Thornmail - hasarı yansıtma
    if (player.thornmail > 0) {
      let reflectDmg = Math.floor(finalDmg * player.thornmail);
      enemy.hp -= reflectDmg;
      addLog(`🌵 Thornmail ${reflectDmg} hasar yansıttı!`);
    }
    
    if (isDefending) {
      addLog(`🛡️ ${enemy.name} saldırdı ama savunma sayesinde sadece ${finalDmg} hasar aldın!`);
    } else {
      addLog(`👹 ${enemy.name} sana ${finalDmg} hasar verdi!`);
    }
  });

  if (player.hp <= 0) {
    player.hp = 0;
    addLog("💀 Öldün! Oyun bitti...");
    endGame(false);
  }
}

function onEnemyDefeated(index) {
  const defeatedEnemy = enemies[index];
  gold += defeatedEnemy.gold;
  addLog(`🏆 ${defeatedEnemy.name} yenildi! +${defeatedEnemy.gold}g`);
  
  // Shinigami companion - düşman öldüğünde %20 HP ve Mana restore
  if (companion && companion.bonus.type === "death") {
    let hpRestore = Math.floor(player.maxHp * 0.2);
    let manaRestore = Math.floor(player.maxMana * 0.2);
    player.hp = Math.min(player.maxHp, player.hp + hpRestore);
    player.mana = Math.min(player.maxMana, player.mana + manaRestore);
    addLog(`💀 Shinigami'nin gücü! +${hpRestore} HP, +${manaRestore} Mana!`);
  }
  
  enemies.splice(index, 1);
  
  if (selectedEnemyIndex >= enemies.length) {
    selectedEnemyIndex = Math.max(0, enemies.length - 1);
  }
  
  if (enemies.length === 0) {
    currentTurn++;
    updateUI();
    startBattle();
  } else {
    renderBattle();
    updateUI();
  }
}

function nextTurn() {
  // Heiter rejenerasyonu
  if (companion && companion.bonus.type === "heal") {
    player.hp = Math.min(player.maxHp, player.hp + companion.bonus.value);
    addLog(`💚 ${companion.name} seni iyileştirdi! +${companion.bonus.value} HP`);
  }

  // Warmog rejenerasyonu
  if (player.warmog) {
    player.hp = Math.min(player.maxHp, player.hp + 10);
    addLog(`❤️ Warmog's Armor! +10 HP rejenerasyon`);
  }

  // Guts berserker countdown
  if (berserkerTurnsLeft > 0) {
    berserkerTurnsLeft--;
    if (berserkerTurnsLeft === 0) {
      addLog("😌 Berserker modu sona erdi.");
    }
  }

  renderBattle();
  updateUI();
}

function endGame(victory) {
  const overlay = document.createElement("div");
  overlay.className = "shopOverlay";
  overlay.innerHTML = `
    <div class="shopPanel" style="text-align:center;">
      <h2>${victory ? "🎉 ZAFER!" : "💀 YENİLDİN"}</h2>
      <p>Tamamlanan Tur: ${currentTurn - 1}/${maxTurns}</p>
      <p>Toplanan Altın: ${gold}g</p>
      <button onclick="location.reload()" style="padding:12px 24px;font-size:16px;">🔄 Yeniden Başla</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ===== TOOLTIP + LOG =====

const tooltip = document.getElementById("tooltip");

function addLog(text) {
  const logPanel = document.getElementById("logPanel");
  const div = document.createElement("div");
  div.textContent = text;
  logPanel.appendChild(div);
  logPanel.scrollTop = logPanel.scrollHeight;
}

function attachItemHover(element, item) {
  element.addEventListener("mouseenter", () => {
    element.classList.add("itemHover");

    let content = `<b>${item.name}</b><br>`;
    
    if (item.price) {
      content += `<span style="color:gold">${item.price}g</span><br>`;
    }
    
    if (item.desc) {
      content += `<span style="color:#aaa;font-size:11px;">${item.desc}</span><br>`;
    }
    
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
    tooltip.style.display = "none";
  });
}