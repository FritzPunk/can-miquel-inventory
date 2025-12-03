// ===== Can Miquel Inventory Management System =====
// ===== WITH FIREBASE REAL-TIME DATABASE =====

// ===== Firebase Configuration =====
const firebaseConfig = {
    apiKey: "AIzaSyCSKhRmynciH_8Vr4gDPg4kXU-FoQqDHKo",
    authDomain: "can-miquel-inventory.firebaseapp.com",
    databaseURL: "https://can-miquel-inventory-default-rtdb.firebaseio.com",
    projectId: "can-miquel-inventory",
    storageBucket: "can-miquel-inventory.firebasestorage.app",
    messagingSenderId: "912925324878",
    appId: "1:912925324878:web:a9ce48b224e67688c4351f"
};

// Initialize Firebase
let database = null;
let firebaseReady = false;

// ===== Translations =====
const translations = {
    en: {
        export: 'Export',
        import: 'Import',
        families: 'Families',
        items: 'items',
        item: 'item',
        selectFamily: 'Select a Family',
        addItem: 'Add Item',
        searchPlaceholder: 'Search items...',
        itemName: 'Item Name',
        quantity: 'Quantity',
        unit: 'Unit',
        minStock: 'Min. Stock',
        status: 'Status',
        actions: 'Actions',
        inStock: 'In Stock',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        emptyState: 'No items yet. Select a family and add your first item!',
        lastSaved: 'Last saved',
        never: 'Never',
        addFamily: 'Add Family',
        editFamily: 'Edit Family',
        familyName: 'Family Name',
        familyNamePlaceholder: 'e.g., Beverages, Meats, Vegetables...',
        iconEmoji: 'Icon (emoji)',
        saveFamily: 'Save Family',
        editItem: 'Edit Item',
        itemNameLabel: 'Item Name',
        itemNamePlaceholder: 'e.g., Olive Oil, Chicken Breast...',
        minStockLabel: 'Minimum Stock (alert threshold)',
        notesLabel: 'Notes (optional)',
        notesPlaceholder: 'Any additional notes...',
        saveItem: 'Save Item',
        unitUnits: 'Units',
        unitKg: 'Kilograms (kg)',
        unitG: 'Grams (g)',
        unitL: 'Liters (L)',
        unitMl: 'Milliliters (mL)',
        unitBottles: 'Bottles',
        unitBoxes: 'Boxes',
        unitPacks: 'Packs',
        confirmDelete: 'Confirm Delete',
        deleteConfirmItem: 'Are you sure you want to delete this item?',
        deleteConfirmFamily: 'Are you sure you want to delete',
        deleteConfirmFamilyItems: 'This will also delete',
        deleteConfirmFamilyItemsIn: 'in this family.',
        cancel: 'Cancel',
        delete: 'Delete',
        enterFamilyName: 'Please enter a family name.',
        enterItemName: 'Please enter an item name.',
        importConfirm: 'This will replace your current inventory with:',
        importFamilies: 'families',
        importItems: 'items',
        importContinue: 'Continue?',
        importSuccess: 'Data imported successfully!',
        importError: 'Error importing data. Please make sure the file is a valid inventory export.',
        defaultBeverages: 'Beverages',
        defaultMeats: 'Meats',
        defaultVegetables: 'Vegetables',
        defaultDairy: 'Dairy',
        defaultPantry: 'Pantry',
        defaultSeafood: 'Seafood',
        connecting: 'Connecting...',
        connected: 'Connected',
        offline: 'Offline Mode'
    },
    es: {
        export: 'Exportar',
        import: 'Importar',
        families: 'Familias',
        items: 'artículos',
        item: 'artículo',
        selectFamily: 'Selecciona una Familia',
        addItem: 'Añadir Artículo',
        searchPlaceholder: 'Buscar artículos...',
        itemName: 'Nombre',
        quantity: 'Cantidad',
        unit: 'Unidad',
        minStock: 'Stock Mín.',
        status: 'Estado',
        actions: 'Acciones',
        inStock: 'En Stock',
        lowStock: 'Stock Bajo',
        outOfStock: 'Agotado',
        emptyState: 'Sin artículos. ¡Selecciona una familia y añade tu primer artículo!',
        lastSaved: 'Guardado',
        never: 'Nunca',
        addFamily: 'Añadir Familia',
        editFamily: 'Editar Familia',
        familyName: 'Nombre de Familia',
        familyNamePlaceholder: 'ej., Bebidas, Carnes, Verduras...',
        iconEmoji: 'Icono (emoji)',
        saveFamily: 'Guardar Familia',
        editItem: 'Editar Artículo',
        itemNameLabel: 'Nombre del Artículo',
        itemNamePlaceholder: 'ej., Aceite de Oliva, Pechuga de Pollo...',
        minStockLabel: 'Stock Mínimo (umbral de alerta)',
        notesLabel: 'Notas (opcional)',
        notesPlaceholder: 'Notas adicionales...',
        saveItem: 'Guardar Artículo',
        unitUnits: 'Unidades',
        unitKg: 'Kilogramos (kg)',
        unitG: 'Gramos (g)',
        unitL: 'Litros (L)',
        unitMl: 'Mililitros (mL)',
        unitBottles: 'Botellas',
        unitBoxes: 'Cajas',
        unitPacks: 'Paquetes',
        confirmDelete: 'Confirmar Eliminación',
        deleteConfirmItem: '¿Estás seguro de que quieres eliminar este artículo?',
        deleteConfirmFamily: '¿Estás seguro de que quieres eliminar',
        deleteConfirmFamilyItems: 'Esto también eliminará',
        deleteConfirmFamilyItemsIn: 'en esta familia.',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        enterFamilyName: 'Por favor, introduce un nombre de familia.',
        enterItemName: 'Por favor, introduce un nombre de artículo.',
        importConfirm: 'Esto reemplazará tu inventario actual con:',
        importFamilies: 'familias',
        importItems: 'artículos',
        importContinue: '¿Continuar?',
        importSuccess: '¡Datos importados correctamente!',
        importError: 'Error al importar datos. Asegúrate de que el archivo es una exportación válida.',
        defaultBeverages: 'Bebidas',
        defaultMeats: 'Carnes',
        defaultVegetables: 'Verduras',
        defaultDairy: 'Lácteos',
        defaultPantry: 'Despensa',
        defaultSeafood: 'Mariscos',
        connecting: 'Conectando...',
        connected: 'Conectado',
        offline: 'Modo Offline'
    }
};

let currentLang = 'en';

// Data Structure
let inventoryData = {
    families: [],
    items: []
};

let currentFamilyId = null;
let editingFamilyId = null;
let editingItemId = null;
let deleteTarget = null;

// DOM Elements - will be initialized after DOM loads
let familyNav, inventoryBody, currentFamilyName, itemCount, addItemBtn;
let searchInput, emptyState, inventoryTable, lastSavedSpan;
let familyModal, familyModalTitle, familyForm, familyNameInput, familyIconInput;
let addFamilyBtn, closeFamilyModal, cancelFamilyBtn;
let itemModal, itemModalTitle, itemForm, itemNameInput, itemQuantityInput;
let itemUnitInput, itemMinStockInput, itemNotesInput, closeItemModal, cancelItemBtn;
let deleteModal, deleteMessage, closeDeleteModal, cancelDeleteBtn, confirmDeleteBtn;
let exportBtn, importBtn, importFile, langToggle, langFlag, langCode;

function initDOMElements() {
    familyNav = document.getElementById('familyNav');
    inventoryBody = document.getElementById('inventoryBody');
    currentFamilyName = document.getElementById('currentFamilyName');
    itemCount = document.getElementById('itemCount');
    addItemBtn = document.getElementById('addItemBtn');
    searchInput = document.getElementById('searchInput');
    emptyState = document.getElementById('emptyState');
    inventoryTable = document.getElementById('inventoryTable');
    lastSavedSpan = document.getElementById('lastSaved');
    familyModal = document.getElementById('familyModal');
    familyModalTitle = document.getElementById('familyModalTitle');
    familyForm = document.getElementById('familyForm');
    familyNameInput = document.getElementById('familyName');
    familyIconInput = document.getElementById('familyIcon');
    addFamilyBtn = document.getElementById('addFamilyBtn');
    closeFamilyModal = document.getElementById('closeFamilyModal');
    cancelFamilyBtn = document.getElementById('cancelFamilyBtn');
    itemModal = document.getElementById('itemModal');
    itemModalTitle = document.getElementById('itemModalTitle');
    itemForm = document.getElementById('itemForm');
    itemNameInput = document.getElementById('itemName');
    itemQuantityInput = document.getElementById('itemQuantity');
    itemUnitInput = document.getElementById('itemUnit');
    itemMinStockInput = document.getElementById('itemMinStock');
    itemNotesInput = document.getElementById('itemNotes');
    closeItemModal = document.getElementById('closeItemModal');
    cancelItemBtn = document.getElementById('cancelItemBtn');
    deleteModal = document.getElementById('deleteModal');
    deleteMessage = document.getElementById('deleteMessage');
    closeDeleteModal = document.getElementById('closeDeleteModal');
    cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    exportBtn = document.getElementById('exportBtn');
    importBtn = document.getElementById('importBtn');
    importFile = document.getElementById('importFile');
    langToggle = document.getElementById('langToggle');
    langFlag = document.getElementById('langFlag');
    langCode = document.getElementById('langCode');
}

// ===== Translation Functions =====
function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    
    if (langFlag && langCode) {
        if (currentLang === 'en') {
            langFlag.textContent = '🇬🇧';
            langCode.textContent = 'EN';
        } else {
            langFlag.textContent = '🇪🇸';
            langCode.textContent = 'ES';
        }
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('canMiquelLang', currentLang);
    applyTranslations();
    renderFamilies();
    renderItems();
    updateItemCount();
    
    if (currentFamilyId) {
        const family = inventoryData.families.find(f => f.id === currentFamilyId);
        if (family) {
            const displayName = getFamilyName(family);
            currentFamilyName.textContent = `${family.icon || '📦'} ${displayName}`;
        }
    } else {
        currentFamilyName.textContent = t('selectFamily');
    }
}

function loadLanguage() {
    const savedLang = localStorage.getItem('canMiquelLang');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        currentLang = savedLang;
    }
    applyTranslations();
}

// ===== Firebase Functions =====
function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.error('❌ Firebase SDK not loaded');
        return false;
    }
    
    try {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        firebaseReady = true;
        console.log('✅ Firebase initialized');
        return true;
    } catch (error) {
        console.error('❌ Firebase init error:', error);
        return false;
    }
}

// ===== Database Functions =====
const STORAGE_KEY = 'canMiquelInventory';

function saveData() {
    if (firebaseReady && database) {
        // Convert arrays to objects for Firebase (Firebase doesn't handle empty arrays well)
        const dataToSave = {
            families: {},
            items: {}
        };
        
        inventoryData.families.forEach((family, index) => {
            dataToSave.families[family.id] = family;
        });
        
        inventoryData.items.forEach((item, index) => {
            dataToSave.items[item.id] = item;
        });
        
        database.ref('inventory').set(dataToSave)
            .then(() => {
                console.log('✅ Saved to Firebase');
                updateLastSaved();
            })
            .catch((error) => {
                console.error('❌ Firebase save error:', error);
                saveToLocalStorage();
            });
    } else {
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inventoryData));
        updateLastSaved();
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadData() {
    if (firebaseReady && database) {
        if (lastSavedSpan) lastSavedSpan.textContent = t('connecting');
        
        // Listen for real-time updates
        database.ref('inventory').on('value', (snapshot) => {
            console.log('📥 Data received from Firebase');
            const data = snapshot.val();
            
            if (data) {
                // Convert Firebase objects back to arrays
                inventoryData.families = data.families ? Object.values(data.families) : [];
                inventoryData.items = data.items ? Object.values(data.items) : [];
            } else {
                // Database is empty, initialize with defaults
                console.log('📝 Database empty, initializing...');
                initializeDefaultData();
                saveData();
            }
            
            renderFamilies();
            renderItems();
            updateItemCount();
            if (lastSavedSpan) lastSavedSpan.textContent = '✓ ' + t('connected');
            
            // Select first family if none selected
            if (!currentFamilyId && inventoryData.families.length > 0) {
                selectFamily(inventoryData.families[0].id);
            } else if (currentFamilyId) {
                // Re-render current selection
                const family = inventoryData.families.find(f => f.id === currentFamilyId);
                if (family) {
                    currentFamilyName.textContent = `${family.icon || '📦'} ${getFamilyName(family)}`;
                    updateItemCount();
                }
            }
        }, (error) => {
            console.error('❌ Firebase read error:', error);
            loadFromLocalStorage();
        });
    } else {
        loadFromLocalStorage();
    }
}

function loadFromLocalStorage() {
    console.log('📂 Loading from localStorage');
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            inventoryData = JSON.parse(saved);
            migrateDefaultFamilies();
        } else {
            initializeDefaultData();
            saveToLocalStorage();
        }
        
        renderFamilies();
        renderItems();
        
        if (inventoryData.families.length > 0) {
            selectFamily(inventoryData.families[0].id);
        }
        
        if (lastSavedSpan) lastSavedSpan.textContent = t('offline');
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        inventoryData = { families: [], items: [] };
    }
}

function initializeDefaultData() {
    inventoryData = {
        families: [
            { id: generateId(), nameKey: 'defaultBeverages', icon: '🍷' },
            { id: generateId(), nameKey: 'defaultMeats', icon: '🥩' },
            { id: generateId(), nameKey: 'defaultVegetables', icon: '🥬' },
            { id: generateId(), nameKey: 'defaultDairy', icon: '🧀' },
            { id: generateId(), nameKey: 'defaultPantry', icon: '🫒' },
            { id: generateId(), nameKey: 'defaultSeafood', icon: '🦐' }
        ],
        items: []
    };
}

function migrateDefaultFamilies() {
    const defaultMappings = {
        'Beverages': 'defaultBeverages',
        'Meats': 'defaultMeats',
        'Vegetables': 'defaultVegetables',
        'Dairy': 'defaultDairy',
        'Pantry': 'defaultPantry',
        'Seafood': 'defaultSeafood'
    };
    
    let needsSave = false;
    inventoryData.families.forEach(family => {
        if (family.name && defaultMappings[family.name] && !family.nameKey) {
            family.nameKey = defaultMappings[family.name];
            delete family.name;
            needsSave = true;
        }
    });
    
    if (needsSave) {
        saveData();
    }
}

function getFamilyName(family) {
    if (family.nameKey && translations[currentLang][family.nameKey]) {
        return translations[currentLang][family.nameKey];
    }
    return family.name || '';
}

function updateLastSaved() {
    if (!lastSavedSpan) return;
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' };
    const timeStr = now.toLocaleDateString('en-GB', options);
    lastSavedSpan.textContent = firebaseReady ? `✓ ${timeStr}` : timeStr;
}

// ===== Utility Functions =====
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getItemsForFamily(familyId) {
    if (!inventoryData.items) return [];
    return inventoryData.items.filter(item => item.familyId === familyId);
}

function getItemStatus(item) {
    if (item.minStock === null || item.minStock === undefined || item.minStock === 0) {
        return 'ok';
    }
    if (item.quantity <= 0) {
        return 'critical';
    }
    if (item.quantity <= item.minStock) {
        return 'low';
    }
    return 'ok';
}

function getStatusLabel(status) {
    switch (status) {
        case 'critical': return t('outOfStock');
        case 'low': return t('lowStock');
        default: return t('inStock');
    }
}

// ===== Render Functions =====
function renderFamilies() {
    if (!familyNav) return;
    familyNav.innerHTML = '';
    
    if (!inventoryData.families) return;
    
    inventoryData.families.forEach((family, index) => {
        const itemsInFamily = getItemsForFamily(family.id).length;
        const itemWord = itemsInFamily !== 1 ? t('items') : t('item');
        const displayName = getFamilyName(family);
        const familyEl = document.createElement('button');
        familyEl.className = `family-item${currentFamilyId === family.id ? ' active' : ''}`;
        familyEl.style.animationDelay = `${index * 0.05}s`;
        familyEl.innerHTML = `
            <span class="family-icon">${family.icon || '📦'}</span>
            <div class="family-info">
                <div class="family-name">${escapeHtml(displayName)}</div>
                <div class="family-count">${itemsInFamily} ${itemWord}</div>
            </div>
            <div class="family-actions">
                <button class="family-action-btn edit" title="Edit" data-id="${family.id}">✏️</button>
                <button class="family-action-btn delete" title="Delete" data-id="${family.id}">🗑️</button>
            </div>
        `;
        
        familyEl.addEventListener('click', (e) => {
            if (!e.target.closest('.family-actions')) {
                selectFamily(family.id);
            }
        });
        
        familyNav.appendChild(familyEl);
    });
    
    document.querySelectorAll('.family-action-btn.edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditFamilyModal(btn.dataset.id);
        });
    });
    
    document.querySelectorAll('.family-action-btn.delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDeleteModal('family', btn.dataset.id);
        });
    });
}

function renderItems() {
    if (!inventoryBody || !emptyState || !inventoryTable) return;
    
    if (!currentFamilyId) {
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    let items = getItemsForFamily(currentFamilyId);
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            (item.notes && item.notes.toLowerCase().includes(searchTerm))
        );
    }
    
    if (items.length === 0) {
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    emptyState.classList.remove('visible');
    inventoryTable.style.display = 'table';
    
    inventoryBody.innerHTML = '';
    items.forEach((item, index) => {
        const status = getItemStatus(item);
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.03}s`;
        row.innerHTML = `
            <td>
                <div class="item-name">${escapeHtml(item.name)}</div>
                ${item.notes ? `<div class="item-notes">${escapeHtml(item.notes)}</div>` : ''}
            </td>
            <td class="quantity-cell">${formatNumber(item.quantity)}</td>
            <td class="unit-cell">${escapeHtml(item.unit)}</td>
            <td>${item.minStock ? formatNumber(item.minStock) : '-'}</td>
            <td><span class="status-badge ${status}">${getStatusLabel(status)}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" title="Edit" data-id="${item.id}">✏️</button>
                    <button class="action-btn delete" title="Delete" data-id="${item.id}">🗑️</button>
                </div>
            </td>
        `;
        inventoryBody.appendChild(row);
    });
    
    document.querySelectorAll('.action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => openEditItemModal(btn.dataset.id));
    });
    
    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => openDeleteModal('item', btn.dataset.id));
    });
}

function selectFamily(familyId) {
    currentFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    
    if (family) {
        const displayName = getFamilyName(family);
        if (currentFamilyName) currentFamilyName.textContent = `${family.icon || '📦'} ${displayName}`;
        if (addItemBtn) addItemBtn.disabled = false;
        updateItemCount();
    }
    
    renderFamilies();
    renderItems();
}

function updateItemCount() {
    if (!itemCount) return;
    if (currentFamilyId) {
        const items = getItemsForFamily(currentFamilyId);
        const itemWord = items.length !== 1 ? t('items') : t('item');
        itemCount.textContent = `${items.length} ${itemWord}`;
    }
}

// ===== Modal Functions =====
function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openAddFamilyModal() {
    editingFamilyId = null;
    if (familyModalTitle) familyModalTitle.textContent = t('addFamily');
    if (familyForm) familyForm.reset();
    openModal(familyModal);
    if (familyNameInput) familyNameInput.focus();
}

function openEditFamilyModal(familyId) {
    editingFamilyId = familyId;
    const family = inventoryData.families.find(f => f.id === familyId);
    if (!family) return;
    
    if (familyModalTitle) familyModalTitle.textContent = t('editFamily');
    if (familyNameInput) familyNameInput.value = getFamilyName(family);
    if (familyIconInput) familyIconInput.value = family.icon || '';
    openModal(familyModal);
    if (familyNameInput) familyNameInput.focus();
}

function openAddItemModal() {
    if (!currentFamilyId) return;
    
    editingItemId = null;
    if (itemModalTitle) itemModalTitle.textContent = t('addItem');
    if (itemForm) itemForm.reset();
    openModal(itemModal);
    if (itemNameInput) itemNameInput.focus();
}

function openEditItemModal(itemId) {
    editingItemId = itemId;
    const item = inventoryData.items.find(i => i.id === itemId);
    if (!item) return;
    
    if (itemModalTitle) itemModalTitle.textContent = t('editItem');
    if (itemNameInput) itemNameInput.value = item.name;
    if (itemQuantityInput) itemQuantityInput.value = item.quantity;
    if (itemUnitInput) itemUnitInput.value = item.unit;
    if (itemMinStockInput) itemMinStockInput.value = item.minStock || '';
    if (itemNotesInput) itemNotesInput.value = item.notes || '';
    openModal(itemModal);
    if (itemNameInput) itemNameInput.focus();
}

function openDeleteModal(type, id) {
    deleteTarget = { type, id };
    
    if (type === 'family') {
        const family = inventoryData.families.find(f => f.id === id);
        const displayName = getFamilyName(family);
        const itemsCount = getItemsForFamily(id).length;
        const itemWord = itemsCount !== 1 ? t('items') : t('item');
        if (deleteMessage) deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(displayName)}</strong>?${itemsCount > 0 ? `<br><br>${t('deleteConfirmFamilyItems')} <strong>${itemsCount} ${itemWord}</strong> ${t('deleteConfirmFamilyItemsIn')}` : ''}`;
    } else {
        const item = inventoryData.items.find(i => i.id === id);
        if (deleteMessage) deleteMessage.innerHTML = `${t('deleteConfirmFamily')} <strong>${escapeHtml(item.name)}</strong>?`;
    }
    
    openModal(deleteModal);
}

// ===== CRUD Operations =====
function saveFamily() {
    const name = familyNameInput ? familyNameInput.value.trim() : '';
    const icon = familyIconInput ? familyIconInput.value.trim() || '📦' : '📦';
    
    if (!name) {
        alert(t('enterFamilyName'));
        return;
    }
    
    if (editingFamilyId) {
        const family = inventoryData.families.find(f => f.id === editingFamilyId);
        if (family) {
            delete family.nameKey;
            family.name = name;
            family.icon = icon;
        }
    } else {
        inventoryData.families.push({
            id: generateId(),
            name,
            icon
        });
    }
    
    saveData();
    closeModal(familyModal);
    renderFamilies();
    
    if (editingFamilyId === currentFamilyId) {
        const family = inventoryData.families.find(f => f.id === currentFamilyId);
        if (family && currentFamilyName) {
            currentFamilyName.textContent = `${family.icon || '📦'} ${family.name}`;
        }
    }
}

function saveItem() {
    const name = itemNameInput ? itemNameInput.value.trim() : '';
    const quantity = itemQuantityInput ? parseFloat(itemQuantityInput.value) || 0 : 0;
    const unit = itemUnitInput ? itemUnitInput.value : 'units';
    const minStock = itemMinStockInput ? parseFloat(itemMinStockInput.value) || 0 : 0;
    const notes = itemNotesInput ? itemNotesInput.value.trim() : '';
    
    if (!name) {
        alert(t('enterItemName'));
        return;
    }
    
    if (!inventoryData.items) inventoryData.items = [];
    
    if (editingItemId) {
        const item = inventoryData.items.find(i => i.id === editingItemId);
        if (item) {
            item.name = name;
            item.quantity = quantity;
            item.unit = unit;
            item.minStock = minStock;
            item.notes = notes;
        }
    } else {
        inventoryData.items.push({
            id: generateId(),
            familyId: currentFamilyId,
            name,
            quantity,
            unit,
            minStock,
            notes
        });
    }
    
    saveData();
    closeModal(itemModal);
    renderItems();
    updateItemCount();
    renderFamilies();
}

function confirmDelete() {
    if (!deleteTarget) return;
    
    if (deleteTarget.type === 'family') {
        inventoryData.items = inventoryData.items.filter(item => item.familyId !== deleteTarget.id);
        inventoryData.families = inventoryData.families.filter(f => f.id !== deleteTarget.id);
        
        if (currentFamilyId === deleteTarget.id) {
            currentFamilyId = null;
            if (currentFamilyName) currentFamilyName.textContent = t('selectFamily');
            if (itemCount) itemCount.textContent = `0 ${t('items')}`;
            if (addItemBtn) addItemBtn.disabled = true;
        }
    } else {
        inventoryData.items = inventoryData.items.filter(i => i.id !== deleteTarget.id);
    }
    
    saveData();
    closeModal(deleteModal);
    renderFamilies();
    renderItems();
    updateItemCount();
    deleteTarget = null;
}

// ===== Export/Import =====
function exportData() {
    const dataStr = JSON.stringify(inventoryData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const date = new Date().toISOString().split('T')[0];
    const filename = `can-miquel-inventory-${date}.json`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.families || !Array.isArray(data.families) || 
                !data.items || !Array.isArray(data.items)) {
                throw new Error('Invalid data format');
            }
            
            const confirmImport = confirm(
                `${t('importConfirm')}\n\n` +
                `• ${data.families.length} ${t('importFamilies')}\n` +
                `• ${data.items.length} ${t('importItems')}\n\n` +
                `${t('importContinue')}`
            );
            
            if (confirmImport) {
                inventoryData = data;
                saveData();
                currentFamilyId = null;
                if (currentFamilyName) currentFamilyName.textContent = t('selectFamily');
                if (itemCount) itemCount.textContent = `0 ${t('items')}`;
                if (addItemBtn) addItemBtn.disabled = true;
                renderFamilies();
                renderItems();
                alert(t('importSuccess'));
            }
        } catch (error) {
            console.error('Import error:', error);
            alert(t('importError'));
        }
    };
    
    reader.readAsText(file);
}

// ===== Helper Functions =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatNumber(num) {
    if (Number.isInteger(num)) {
        return num.toString();
    }
    return num.toFixed(2).replace(/\.?0+$/, '');
}

// ===== Event Listeners =====
function setupEventListeners() {
    if (addFamilyBtn) addFamilyBtn.addEventListener('click', openAddFamilyModal);
    if (closeFamilyModal) closeFamilyModal.addEventListener('click', () => closeModal(familyModal));
    if (cancelFamilyBtn) cancelFamilyBtn.addEventListener('click', () => closeModal(familyModal));
    if (familyForm) familyForm.addEventListener('submit', (e) => { e.preventDefault(); saveFamily(); });

    if (addItemBtn) addItemBtn.addEventListener('click', openAddItemModal);
    if (closeItemModal) closeItemModal.addEventListener('click', () => closeModal(itemModal));
    if (cancelItemBtn) cancelItemBtn.addEventListener('click', () => closeModal(itemModal));
    if (itemForm) itemForm.addEventListener('submit', (e) => { e.preventDefault(); saveItem(); });

    if (closeDeleteModal) closeDeleteModal.addEventListener('click', () => closeModal(deleteModal));
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', () => closeModal(deleteModal));
    if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', confirmDelete);

    [familyModal, itemModal, deleteModal].forEach(modal => {
        if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [familyModal, itemModal, deleteModal].forEach(modal => {
                if (modal && modal.classList.contains('active')) closeModal(modal);
            });
        }
    });

    if (searchInput) searchInput.addEventListener('input', renderItems);
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (importBtn) importBtn.addEventListener('click', () => importFile && importFile.click());
    if (importFile) importFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) { importData(e.target.files[0]); e.target.value = ''; }
    });
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App starting...');
    
    // Initialize DOM elements
    initDOMElements();
    
    // Load language
    loadLanguage();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize Firebase and load data
    if (initFirebase()) {
        console.log('🔥 Firebase ready, loading data...');
        loadData();
    } else {
        console.log('📂 No Firebase, using localStorage...');
        loadFromLocalStorage();
    }
});
