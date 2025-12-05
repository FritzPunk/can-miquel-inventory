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
        weekly: 'Mermax',
        weeklyWaste: 'This Week Waste',
        realStock: 'Real Stock',
        applyMermax: 'Apply Waste',
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
        weeklyLabel: 'This Week Waste (Mermax)',
        weeklyLabelHelp: 'Amount to deduct from inventory',
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
        offline: 'Offline Mode',
        
        // Reservations
        inventory: 'Inventory',
        reservations: 'Reservations',
        addReservation: 'Add Reservation',
        editReservation: 'Edit Reservation',
        saveReservation: 'Save Reservation',
        customerName: 'Customer Name',
        date: 'Date',
        time: 'Time',
        numberOfPeople: 'Number of People',
        eventType: 'Event Type',
        phone: 'Phone Number',
        noEvent: 'Regular Dining',
        birthday: 'Birthday',
        anniversary: 'Anniversary',
        business: 'Business Meal',
        otherEvent: 'Other Event',
        reservationNotesPlaceholder: 'Special requests, allergies, etc...',
        emptyReservations: 'No reservations yet. Add your first reservation!',
        people: 'people',
        person: 'person'
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
        weekly: 'Mermax',
        weeklyWaste: 'Desperdicio Semanal',
        realStock: 'Stock Real',
        applyMermax: 'Aplicar Desperdicio',
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
        weeklyLabel: 'Desperdicio Esta Semana (Mermax)',
        weeklyLabelHelp: 'Cantidad a deducir del inventario',
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
        offline: 'Modo Offline',
        
        // Reservations
        inventory: 'Inventario',
        reservations: 'Reservas',
        addReservation: 'Añadir Reserva',
        editReservation: 'Editar Reserva',
        saveReservation: 'Guardar Reserva',
        customerName: 'Nombre del Cliente',
        date: 'Fecha',
        time: 'Hora',
        numberOfPeople: 'Número de Personas',
        eventType: 'Tipo de Evento',
        phone: 'Teléfono',
        noEvent: 'Cena Regular',
        birthday: 'Cumpleaños',
        anniversary: 'Aniversario',
        business: 'Comida de Negocios',
        otherEvent: 'Otro Evento',
        reservationNotesPlaceholder: 'Peticiones especiales, alergias, etc...',
        emptyReservations: '¡Sin reservas aún. Añade tu primera reserva!',
        people: 'personas',
        person: 'persona'
    }
};

let currentLang = 'en';

// Data Structure
let inventoryData = {
    families: [],
    items: [],
    reservations: []
};

let currentFamilyId = null;
let editingFamilyId = null;
let editingItemId = null;
let editingReservationId = null;
let deleteTarget = null;
let currentTab = 'inventory';

// DOM Elements - will be initialized after DOM loads
let familyNav, inventoryBody, currentFamilyName, itemCount, addItemBtn;
let searchInput, emptyState, inventoryTable, lastSavedSpan;
let familyModal, familyModalTitle, familyForm, familyNameInput, familyIconInput;
let addFamilyBtn, closeFamilyModal, cancelFamilyBtn;
let itemModal, itemModalTitle, itemForm, itemNameInput, itemQuantityInput;
let itemUnitInput, itemMinStockInput, itemWeeklyInput, itemNotesInput, closeItemModal, cancelItemBtn;
let deleteModal, deleteMessage, closeDeleteModal, cancelDeleteBtn, confirmDeleteBtn;
let exportBtn, importBtn, importFile, langToggle, langFlag, langCode;
let reservationsGrid, reservationsEmpty, reservationCount, addReservationBtn;
let reservationModal, reservationModalTitle, reservationForm, closeReservationModal, cancelReservationBtn;
let reservationNameInput, reservationDateInput, reservationTimeInput, reservationPeopleInput;
let reservationEventInput, reservationPhoneInput, reservationNotesInput;

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
    itemWeeklyInput = document.getElementById('itemWeekly');
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
    reservationsGrid = document.getElementById('reservationsGrid');
    reservationsEmpty = document.getElementById('reservationsEmpty');
    reservationCount = document.getElementById('reservationCount');
    addReservationBtn = document.getElementById('addReservationBtn');
    reservationModal = document.getElementById('reservationModal');
    reservationModalTitle = document.getElementById('reservationModalTitle');
    reservationForm = document.getElementById('reservationForm');
    closeReservationModal = document.getElementById('closeReservationModal');
    cancelReservationBtn = document.getElementById('cancelReservationBtn');
    reservationNameInput = document.getElementById('reservationName');
    reservationDateInput = document.getElementById('reservationDate');
    reservationTimeInput = document.getElementById('reservationTime');
    reservationPeopleInput = document.getElementById('reservationPeople');
    reservationEventInput = document.getElementById('reservationEvent');
    reservationPhoneInput = document.getElementById('reservationPhone');
    reservationNotesInput = document.getElementById('reservationNotes');
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
            items: {},
            reservations: {}
        };
        
        inventoryData.families.forEach((family, index) => {
            dataToSave.families[family.id] = family;
        });
        
        inventoryData.items.forEach((item, index) => {
            dataToSave.items[item.id] = item;
        });
        
        if (inventoryData.reservations) {
            inventoryData.reservations.forEach((reservation, index) => {
                dataToSave.reservations[reservation.id] = reservation;
            });
        }
        
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
        
        // Clear any old localStorage data when using Firebase
        localStorage.removeItem(STORAGE_KEY);
        
        // Listen for real-time updates
        database.ref('inventory').on('value', (snapshot) => {
            console.log('📥 Data received from Firebase');
            const data = snapshot.val();
            
            if (data) {
                // Convert Firebase objects back to arrays
                inventoryData.families = data.families ? Object.values(data.families) : [];
                inventoryData.items = data.items ? Object.values(data.items) : [];
                inventoryData.reservations = data.reservations ? Object.values(data.reservations) : [];
                console.log('📦 Loaded:', inventoryData.families.length, 'families,', inventoryData.items.length, 'items,', inventoryData.reservations.length, 'reservations');
            } else {
                // Database is empty, initialize with defaults
                console.log('📝 Database empty, initializing...');
                initializeDefaultData();
                saveData();
                return; // saveData will trigger another 'value' event
            }
            
            // Always re-render everything
            renderFamilies();
            
            // Select first family if none selected or if current doesn't exist
            if (inventoryData.families.length > 0) {
                const currentExists = currentFamilyId && inventoryData.families.find(f => f.id === currentFamilyId);
                if (!currentExists) {
                    selectFamily(inventoryData.families[0].id);
                } else {
                    renderItems();
                    updateItemCount();
                    const family = inventoryData.families.find(f => f.id === currentFamilyId);
                    if (family && currentFamilyName) {
                        currentFamilyName.textContent = `${family.icon || '📦'} ${getFamilyName(family)}`;
                    }
                }
            } else {
                renderItems();
            }
            
            if (lastSavedSpan) lastSavedSpan.textContent = '✓ ' + t('connected');
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
        items: [],
        reservations: []
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
    // Calculate real stock (quantity - weekly waste)
    const realStock = item.quantity - (item.weekly || 0);
    
    if (item.minStock === null || item.minStock === undefined || item.minStock === 0) {
        return realStock <= 0 ? 'critical' : 'ok';
    }
    if (realStock <= 0) {
        return 'critical';
    }
    if (realStock <= item.minStock) {
        return 'low';
    }
    return 'ok';
}

function getRealStock(item) {
    return item.quantity - (item.weekly || 0);
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
        const realStock = getRealStock(item);
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.03}s`;
        row.innerHTML = `
            <td>
                <div class="item-name">${escapeHtml(item.name)}</div>
                ${item.notes ? `<div class="item-notes">${escapeHtml(item.notes)}</div>` : ''}
            </td>
            <td class="quantity-cell">${formatNumber(item.quantity)}</td>
            <td class="quantity-cell" style="color: #c9a349;">${item.weekly ? formatNumber(item.weekly) : '-'}</td>
            <td class="quantity-cell" style="font-weight: 700; color: ${realStock < 0 ? '#b85450' : '#6b9b6b'};">${formatNumber(realStock)}</td>
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
    if (itemWeeklyInput) itemWeeklyInput.value = item.weekly || '';
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
    } else if (type === 'reservation') {
        const reservation = inventoryData.reservations.find(r => r.id === id);
        if (deleteMessage) deleteMessage.innerHTML = `Are you sure you want to delete the reservation for <strong>${escapeHtml(reservation.name)}</strong> on ${formatDate(reservation.date)}?`;
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
    const weekly = itemWeeklyInput ? parseFloat(itemWeeklyInput.value) || 0 : 0;
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
            item.weekly = weekly;
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
            weekly,
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
        renderFamilies();
        renderItems();
        updateItemCount();
    } else if (deleteTarget.type === 'reservation') {
        inventoryData.reservations = inventoryData.reservations.filter(r => r.id !== deleteTarget.id);
        renderReservations();
    } else {
        inventoryData.items = inventoryData.items.filter(i => i.id !== deleteTarget.id);
        renderFamilies();
        renderItems();
        updateItemCount();
    }
    
    saveData();
    closeModal(deleteModal);
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

// ===== Tab Navigation =====
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (tabName === 'inventory') {
        document.getElementById('inventorySection').classList.add('active');
    } else if (tabName === 'reservations') {
        document.getElementById('reservationsSection').classList.add('active');
        renderReservations();
    }
}

// ===== Reservations Functions =====
function renderReservations() {
    if (!reservationsGrid || !reservationsEmpty) return;
    
    if (!inventoryData.reservations || inventoryData.reservations.length === 0) {
        reservationsGrid.innerHTML = '';
        reservationsEmpty.classList.add('visible');
        if (reservationCount) reservationCount.textContent = `0 ${t('reservations')}`;
        return;
    }
    
    reservationsEmpty.classList.remove('visible');
    
    // Sort by date and time
    const sortedReservations = [...inventoryData.reservations].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
    });
    
    reservationsGrid.innerHTML = '';
    sortedReservations.forEach((reservation) => {
        const card = document.createElement('div');
        card.className = 'reservation-card';
        
        const eventLabel = reservation.event ? t(reservation.event) : '';
        const peopleWord = reservation.people === 1 ? t('person') : t('people');
        
        card.innerHTML = `
            <div class="reservation-header">
                <div class="reservation-name">${escapeHtml(reservation.name)}</div>
                ${reservation.event ? `<span class="reservation-event">${getEventEmoji(reservation.event)} ${eventLabel}</span>` : ''}
            </div>
            <div class="reservation-datetime">
                <div class="reservation-date">📅 ${formatDate(reservation.date)}</div>
                <div class="reservation-time">🕐 ${reservation.time}</div>
            </div>
            <div class="reservation-people">👥 ${reservation.people} ${peopleWord}</div>
            ${reservation.phone ? `<div class="reservation-phone">📞 ${escapeHtml(reservation.phone)}</div>` : ''}
            ${reservation.notes ? `<div class="reservation-notes">${escapeHtml(reservation.notes)}</div>` : ''}
            <div class="reservation-actions">
                <button class="action-btn edit" data-id="${reservation.id}">✏️</button>
                <button class="action-btn delete" data-id="${reservation.id}">🗑️</button>
            </div>
        `;
        
        reservationsGrid.appendChild(card);
    });
    
    if (reservationCount) {
        const count = inventoryData.reservations.length;
        reservationCount.textContent = `${count} ${count === 1 ? 'reservation' : 'reservations'}`;
    }
    
    // Add event listeners
    document.querySelectorAll('.reservation-card .action-btn.edit').forEach(btn => {
        btn.addEventListener('click', () => openEditReservationModal(btn.dataset.id));
    });
    
    document.querySelectorAll('.reservation-card .action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => openDeleteModal('reservation', btn.dataset.id));
    });
}

function getEventEmoji(eventType) {
    switch(eventType) {
        case 'birthday': return '🎂';
        case 'anniversary': return '💝';
        case 'business': return '💼';
        case 'other': return '🎉';
        default: return '🍽️';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-GB', options);
}

function openAddReservationModal() {
    editingReservationId = null;
    if (reservationModalTitle) reservationModalTitle.textContent = t('addReservation');
    if (reservationForm) reservationForm.reset();
    
    // Set default date to today
    if (reservationDateInput) {
        const today = new Date().toISOString().split('T')[0];
        reservationDateInput.value = today;
    }
    
    openModal(reservationModal);
    if (reservationNameInput) reservationNameInput.focus();
}

function openEditReservationModal(reservationId) {
    editingReservationId = reservationId;
    const reservation = inventoryData.reservations.find(r => r.id === reservationId);
    if (!reservation) return;
    
    if (reservationModalTitle) reservationModalTitle.textContent = t('editReservation');
    if (reservationNameInput) reservationNameInput.value = reservation.name;
    if (reservationDateInput) reservationDateInput.value = reservation.date;
    if (reservationTimeInput) reservationTimeInput.value = reservation.time;
    if (reservationPeopleInput) reservationPeopleInput.value = reservation.people;
    if (reservationEventInput) reservationEventInput.value = reservation.event || '';
    if (reservationPhoneInput) reservationPhoneInput.value = reservation.phone || '';
    if (reservationNotesInput) reservationNotesInput.value = reservation.notes || '';
    
    openModal(reservationModal);
    if (reservationNameInput) reservationNameInput.focus();
}

function saveReservation() {
    const name = reservationNameInput ? reservationNameInput.value.trim() : '';
    const date = reservationDateInput ? reservationDateInput.value : '';
    const time = reservationTimeInput ? reservationTimeInput.value : '';
    const people = reservationPeopleInput ? parseInt(reservationPeopleInput.value) : 0;
    const event = reservationEventInput ? reservationEventInput.value : '';
    const phone = reservationPhoneInput ? reservationPhoneInput.value.trim() : '';
    const notes = reservationNotesInput ? reservationNotesInput.value.trim() : '';
    
    if (!name || !date || !time || !people) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (!inventoryData.reservations) inventoryData.reservations = [];
    
    if (editingReservationId) {
        const reservation = inventoryData.reservations.find(r => r.id === editingReservationId);
        if (reservation) {
            reservation.name = name;
            reservation.date = date;
            reservation.time = time;
            reservation.people = people;
            reservation.event = event;
            reservation.phone = phone;
            reservation.notes = notes;
        }
    } else {
        inventoryData.reservations.push({
            id: generateId(),
            name,
            date,
            time,
            people,
            event,
            phone,
            notes
        });
    }
    
    saveData();
    closeModal(reservationModal);
    renderReservations();
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
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
    
    // Family events
    if (addFamilyBtn) addFamilyBtn.addEventListener('click', openAddFamilyModal);
    if (closeFamilyModal) closeFamilyModal.addEventListener('click', () => closeModal(familyModal));
    if (cancelFamilyBtn) cancelFamilyBtn.addEventListener('click', () => closeModal(familyModal));
    if (familyForm) familyForm.addEventListener('submit', (e) => { e.preventDefault(); saveFamily(); });

    // Item events
    if (addItemBtn) addItemBtn.addEventListener('click', openAddItemModal);
    if (closeItemModal) closeItemModal.addEventListener('click', () => closeModal(itemModal));
    if (cancelItemBtn) cancelItemBtn.addEventListener('click', () => closeModal(itemModal));
    if (itemForm) itemForm.addEventListener('submit', (e) => { e.preventDefault(); saveItem(); });

    // Reservation events
    if (addReservationBtn) addReservationBtn.addEventListener('click', openAddReservationModal);
    if (closeReservationModal) closeReservationModal.addEventListener('click', () => closeModal(reservationModal));
    if (cancelReservationBtn) cancelReservationBtn.addEventListener('click', () => closeModal(reservationModal));
    if (reservationForm) reservationForm.addEventListener('submit', (e) => { e.preventDefault(); saveReservation(); });

    // Delete modal
    if (closeDeleteModal) closeDeleteModal.addEventListener('click', () => closeModal(deleteModal));
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', () => closeModal(deleteModal));
    if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', confirmDelete);

    // Close modals on overlay click
    [familyModal, itemModal, deleteModal, reservationModal].forEach(modal => {
        if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [familyModal, itemModal, deleteModal, reservationModal].forEach(modal => {
                if (modal && modal.classList.contains('active')) closeModal(modal);
            });
        }
    });

    // Other events
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
