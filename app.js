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
        mermaxByFamily: 'Weekly Waste by Family (Mermax)',
        noMermaxData: 'No waste data yet. Add mermax values to items.',
        
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
        person: 'person',
        
        // Cierre del Día
        cierre: 'Day Close',
        cierreDelDia: 'Day Close - Cash Reconciliation',
        addCierre: 'Add Close',
        saveCierre: 'Save Close',
        cierreZ: 'Z-CLOSE (System Report)',
        cierreZCash: 'Cash Z-Close ($)',
        cierreZCard: 'Card Z-Close ($)',
        realMoney: 'Real Money (Counted)',
        realCash: 'Real Cash ($)',
        realCard: 'Real Card ($)',
        totalZClose: 'Total Z-Close',
        totalReal: 'Total Real',
        difference: 'Difference',
        correct: 'CORRECT',
        review: 'REVIEW',
        history: 'History',
        emptyCierre: 'No closes yet. Add your first day close!',
        cierreNotesPlaceholder: 'Additional observations...',
        cashDiff: 'Cash Diff',
        cardDiff: 'Card Diff',
        exportCierre: 'Export to Excel',
        noDataExport: 'No data to export',
        exportSuccess: 'Excel file exported successfully!',
        enterDate: 'Please enter a date',
        enterAtLeastOneValue: 'Please enter at least one value',
        closeSavedFor: 'Close saved for',
        fillAllFields: 'Please fill in all required fields',
        negativeValue: 'Quantities cannot be negative',
        invalidNumber: 'Please enter valid numbers',
        storageFull: 'Storage quota exceeded. Please export your data and clear some items.',
        dataLarge: 'Warning: Inventory data is very large. Consider exporting a backup.'
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
        mermaxByFamily: 'Desperdicio Semanal por Familia (Mermax)',
        noMermaxData: 'Sin datos de desperdicio aún. Añade valores mermax a los artículos.',
        
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
        person: 'persona',
        
        // Cierre del Día
        cierre: 'Cierre',
        cierreDelDia: 'Cierre del Día - Reconciliación de Caja',
        addCierre: 'Añadir Cierre',
        saveCierre: 'Guardar Cierre',
        cierreZ: 'CIERRE DE Z (Del Sistema)',
        cierreZCash: 'CIERRE Z - Efectivo ($)',
        cierreZCard: 'CIERRE Z - Visa/Tarjetas ($)',
        realMoney: 'Dinero Real (Contado)',
        realCash: 'Efectivo Real ($)',
        realCard: 'Visa/Tarjetas Real ($)',
        totalZClose: 'Total Cierre Z',
        totalReal: 'Total Real',
        difference: 'Diferencia',
        correct: 'CORRECTO',
        review: 'REVISAR',
        history: 'Historial',
        emptyCierre: '¡Sin cierres aún. Añade tu primer cierre del día!',
        cierreNotesPlaceholder: 'Observaciones adicionales...',
        cashDiff: 'Dif. Efectivo',
        cardDiff: 'Dif. Tarjetas',
        exportCierre: 'Exportar a Excel',
        noDataExport: 'No hay datos para exportar',
        exportSuccess: '¡Archivo Excel exportado correctamente!',
        enterDate: 'Por favor, introduce una fecha',
        enterAtLeastOneValue: 'Por favor, introduce al menos un valor',
        closeSavedFor: 'Cierre guardado para',
        fillAllFields: 'Por favor, completa todos los campos requeridos',
        negativeValue: 'Las cantidades no pueden ser negativas',
        invalidNumber: 'Por favor, introduce números válidos',
        storageFull: 'Cuota de almacenamiento excedida. Por favor, exporta tus datos y elimina algunos artículos.',
        dataLarge: 'Advertencia: Los datos del inventario son muy grandes. Considera exportar una copia de seguridad.'
    }
};

let currentLang = 'en';

// Data Structure
let inventoryData = {
    families: [],
    items: [],
    reservations: [],
    cierres: []
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
let cierreCards, cierreEmpty, addCierreBtn, exportCierreBtn, cierreForm, cierreDateInput;
let cierreZCashInput, cierreZCardInput, realCashInput, realCardInput, cierreNotesInput;
let totalZCloseSpan, totalRealSpan, totalDifferenceSpan, cierreStatusDiv;

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
    cierreCards = document.getElementById('cierreCards');
    cierreEmpty = document.getElementById('cierreEmpty');
    addCierreBtn = document.getElementById('addCierreBtn');
    exportCierreBtn = document.getElementById('exportCierreBtn');
    cierreForm = document.getElementById('cierreForm');
    cierreDateInput = document.getElementById('cierreDate');
    cierreZCashInput = document.getElementById('cierreZCash');
    cierreZCardInput = document.getElementById('cierreZCard');
    realCashInput = document.getElementById('realCash');
    realCardInput = document.getElementById('realCard');
    cierreNotesInput = document.getElementById('cierreNotes');
    totalZCloseSpan = document.getElementById('totalZClose');
    totalRealSpan = document.getElementById('totalReal');
    totalDifferenceSpan = document.getElementById('totalDifference');
    cierreStatusDiv = document.getElementById('cierreStatus');
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
    console.log('🔥 Attempting to initialize Firebase...');
    
    // Check if Firebase SDK loaded
    if (typeof firebase === 'undefined') {
        console.warn('⚠️ Firebase SDK not loaded - using offline mode');
        return false;
    }
    
    try {
        // Check if already initialized (iOS sometimes re-initializes)
        if (firebase.apps && firebase.apps.length > 0) {
            console.log('✅ Firebase already initialized');
            database = firebase.database();
            firebaseReady = true;
            return true;
        }
        
        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        
        // CRITICAL: Set firebaseReady SYNCHRONOUSLY (before any async operations)
        // This prevents race condition where function returns true but firebaseReady is false
        firebaseReady = true;
        console.log('✅ Firebase initialized, firebaseReady = true');
        
        // Test connection in background (for logging/monitoring only)
        const testRef = database.ref('.info/connected');
        testRef.once('value').then((snap) => {
            if (snap.val() === true) {
                console.log('✅ Firebase connection verified - online');
                database.goOnline();
            } else {
                console.log('ℹ️ Firebase offline - will auto-reconnect');
            }
        }).catch((error) => {
            console.warn('⚠️ Firebase connection test error:', error.message);
            console.log('ℹ️ Firebase will retry connection automatically');
        });
        
        return true;
    } catch (error) {
        console.error('❌ Firebase init error:', error);
        if (error.message) {
            console.error('Error message:', error.message);
        }
        firebaseReady = false;
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
            reservations: {},
            cierres: {}
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
        
        if (inventoryData.cierres) {
            inventoryData.cierres.forEach((cierre, index) => {
                dataToSave.cierres[cierre.id] = cierre;
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
        const dataStr = JSON.stringify(inventoryData);
        if (dataStr.length > 5000000) { // ~5MB limit check
            console.warn('⚠️ Data too large for localStorage');
            alert(t('dataLarge'));
        }
        localStorage.setItem(STORAGE_KEY, dataStr);
        updateLastSaved();
    } catch (error) {
        console.error('❌ Error saving to localStorage:', error);
        if (error.name === 'QuotaExceededError') {
            alert(t('storageFull'));
        } else {
            alert('Error saving data: ' + error.message);
        }
    }
}

function loadData() {
    console.log('📥 loadData called, firebaseReady:', firebaseReady);
    
    if (firebaseReady && database) {
        if (lastSavedSpan) lastSavedSpan.textContent = t('connecting');
        
        // CRITICAL: Backup localStorage data BEFORE clearing
        const localBackup = localStorage.getItem(STORAGE_KEY);
        console.log('💾 Backed up localStorage data');
        
        // Set a timeout for iOS (fallback to localStorage if Firebase takes too long)
        let firebaseLoaded = false;
        const timeoutId = setTimeout(() => {
            if (!firebaseLoaded) {
                console.warn('⏱️ Firebase timeout, restoring from backup');
                // Restore the backup if Firebase fails
                if (localBackup) {
                    localStorage.setItem(STORAGE_KEY, localBackup);
                }
                loadFromLocalStorage();
            }
        }, 5000); // 5 second timeout
        
        // DON'T clear localStorage yet - wait until Firebase data is confirmed loaded
        
        // Listen for real-time updates
        database.ref('inventory').on('value', (snapshot) => {
            console.log('📥 Data received from Firebase');
            clearTimeout(timeoutId);
            firebaseLoaded = true;
            
            const data = snapshot.val();
            console.log('📦 Raw Firebase data:', data);
            
            if (data) {
                try {
                    // Convert Firebase objects back to arrays
                    inventoryData.families = data.families ? Object.values(data.families) : [];
                    inventoryData.items = data.items ? Object.values(data.items) : [];
                    inventoryData.reservations = data.reservations ? Object.values(data.reservations) : [];
                    inventoryData.cierres = data.cierres ? Object.values(data.cierres) : [];
                    
                    console.log('📦 Loaded from Firebase:', inventoryData.families.length, 'families,', inventoryData.items.length, 'items');
                    
                    // Only clear localStorage after successful Firebase load
                    localStorage.removeItem(STORAGE_KEY);
                    console.log('✅ Cleared localStorage (data in Firebase)');
                } catch (error) {
                    console.error('❌ Error parsing Firebase data:', error);
                    console.log('⚠️ Attempting to load from localStorage backup...');
                    loadFromLocalStorage();
                    return;
                }
            } else {
                // Database is empty - check if localStorage has data to migrate
                console.log('📝 Firebase database is empty');
                const localData = localStorage.getItem(STORAGE_KEY);
                
                if (localData) {
                    try {
                        console.log('💾 Found localStorage data, migrating to Firebase...');
                        const parsed = JSON.parse(localData);
                        inventoryData = parsed;
                        migrateDefaultFamilies();
                        
                        // Save to Firebase
                        saveData();
                        console.log('✅ Migrated localStorage data to Firebase');
                        return; // saveData will trigger another 'value' event
                    } catch (error) {
                        console.error('❌ Error parsing localStorage data:', error);
                        initializeDefaultData();
                        saveData();
                        return;
                    }
                } else {
                    // No data anywhere, initialize with defaults
                    console.log('📝 No data found, initializing defaults...');
                    initializeDefaultData();
                    saveData();
                    return;
                }
            }
            
            // Always re-render everything
            console.log('🎨 Rendering families...');
            renderFamilies();
            
            // Select first family if none selected or if current doesn't exist
            if (inventoryData.families.length > 0) {
                const currentExists = currentFamilyId && inventoryData.families.find(f => f.id === currentFamilyId);
                console.log('Current family exists:', currentExists, 'currentFamilyId:', currentFamilyId);
                
                if (!currentExists) {
                    console.log('Selecting first family:', inventoryData.families[0].id);
                    selectFamily(inventoryData.families[0].id);
                } else {
                    console.log('Rendering existing family');
                    renderItems();
                    updateItemCount();
                    renderMermaxChart();
                    const family = inventoryData.families.find(f => f.id === currentFamilyId);
                    if (family && currentFamilyName) {
                        currentFamilyName.textContent = `${family.icon || '📦'} ${getFamilyName(family)}`;
                    }
                }
            } else {
                console.log('No families found, rendering empty state');
                renderItems();
                renderMermaxChart();
            }
            
            if (lastSavedSpan) lastSavedSpan.textContent = '✓ ' + t('connected');
        }, (error) => {
            console.error('❌ Firebase read error:', error);
            clearTimeout(timeoutId);
            loadFromLocalStorage();
        });
    } else {
        console.log('📂 Firebase not ready, using localStorage');
        loadFromLocalStorage();
    }
}

function loadFromLocalStorageSync() {
    console.log('📂 Loading from localStorage (sync)');
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            inventoryData = JSON.parse(saved);
            migrateDefaultFamilies();
            
            renderFamilies();
            renderItems();
            renderMermaxChart();
            
            if (inventoryData.families.length > 0) {
                selectFamily(inventoryData.families[0].id);
            }
            
            if (lastSavedSpan) lastSavedSpan.textContent = t('offline');
            console.log('✅ Loaded from localStorage:', inventoryData.families?.length || 0, 'families');
            return true;
        } else {
            console.log('📝 No saved data in localStorage');
            return false;
        }
    } catch (error) {
        console.error('❌ Error loading from localStorage:', error);
        inventoryData = { families: [], items: [], reservations: [], cierres: [] };
        return false;
    }
}

function loadFromLocalStorage() {
    console.log('📂 Loading from localStorage');
    const hasData = loadFromLocalStorageSync();
    
    if (!hasData) {
        initializeDefaultData();
        saveToLocalStorage();
        renderFamilies();
        renderItems();
        renderMermaxChart();
        
        if (inventoryData.families.length > 0) {
            selectFamily(inventoryData.families[0].id);
        }
    }
    
    if (lastSavedSpan) lastSavedSpan.textContent = t('offline');
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
        reservations: [],
        cierres: []
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
    console.log('🎨 renderFamilies called');
    if (!familyNav) {
        console.error('❌ familyNav element not found');
        return;
    }
    familyNav.innerHTML = '';
    
    if (!inventoryData.families) {
        console.warn('⚠️ No families data');
        return;
    }
    
    console.log('Rendering', inventoryData.families.length, 'families');
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
    console.log('🎨 renderItems called, currentFamilyId:', currentFamilyId);
    
    if (!inventoryBody || !emptyState || !inventoryTable) {
        console.error('❌ Missing DOM elements:', {
            inventoryBody: !!inventoryBody,
            emptyState: !!emptyState,
            inventoryTable: !!inventoryTable
        });
        return;
    }
    
    if (!currentFamilyId) {
        console.log('No family selected, showing empty state');
        inventoryBody.innerHTML = '';
        emptyState.classList.add('visible');
        inventoryTable.style.display = 'none';
        return;
    }
    
    let items = getItemsForFamily(currentFamilyId);
    console.log('Found', items.length, 'items for family', currentFamilyId);
    
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

// ===== Mermax Chart =====
function renderMermaxChart() {
    const chartElement = document.getElementById('mermaxChart');
    const chartContainer = document.getElementById('mermaxChartContainer');
    
    if (!chartElement || !chartContainer) {
        console.log('Chart elements not found');
        return;
    }
    
    // Make sure we have the data structure
    if (!inventoryData || !inventoryData.families || !inventoryData.items) {
        console.log('Inventory data not ready');
        chartContainer.style.display = 'none';
        return;
    }
    
    // Calculate mermax totals by family
    const familyMermax = {};
    let totalMermax = 0;
    
    inventoryData.families.forEach(family => {
        const items = inventoryData.items.filter(item => item.familyId === family.id);
        const familyTotal = items.reduce((sum, item) => {
            return sum + (parseFloat(item.weekly) || 0);
        }, 0);
        
        if (familyTotal > 0) {
            familyMermax[family.id] = {
                name: getFamilyName(family),
                icon: family.icon || '📦',
                total: familyTotal
            };
            totalMermax += familyTotal;
        }
    });
    
    // Sort by total (descending)
    const sortedFamilies = Object.entries(familyMermax)
        .sort((a, b) => b[1].total - a[1].total);
    
    // Always show container
    chartContainer.style.display = 'block';
    
    // Render chart
    if (sortedFamilies.length === 0) {
        chartElement.innerHTML = `<div class="chart-no-data">${t('noMermaxData')}</div>`;
        return;
    }
    
    const maxValue = sortedFamilies[0][1].total;
    
    chartElement.innerHTML = sortedFamilies.map(([familyId, data]) => {
        const percentage = (data.total / maxValue) * 100;
        return `
            <div class="chart-bar-container">
                <div class="chart-label">
                    <span class="chart-label-icon">${data.icon}</span>
                    <span>${escapeHtml(data.name)}</span>
                </div>
                <div class="chart-bar-wrapper">
                    <div class="chart-bar" style="width: ${percentage}%;">
                        <span class="chart-bar-value">${formatNumber(data.total)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
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
    renderMermaxChart();
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
    
    // Validate numeric values
    if (quantity < 0 || minStock < 0 || weekly < 0) {
        alert(t('negativeValue'));
        return;
    }
    
    if (!isFinite(quantity) || !isFinite(minStock) || !isFinite(weekly)) {
        alert(t('invalidNumber'));
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
    renderMermaxChart();
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
        renderMermaxChart();
    } else if (deleteTarget.type === 'reservation') {
        inventoryData.reservations = inventoryData.reservations.filter(r => r.id !== deleteTarget.id);
        renderReservations();
    } else {
        inventoryData.items = inventoryData.items.filter(i => i.id !== deleteTarget.id);
        renderFamilies();
        renderItems();
        updateItemCount();
        renderMermaxChart();
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

// ===== Cierre del Día Functions =====
function calculateCierre() {
    const zCash = parseFloat(cierreZCashInput?.value) || 0;
    const zCard = parseFloat(cierreZCardInput?.value) || 0;
    const rCash = parseFloat(realCashInput?.value) || 0;
    const rCard = parseFloat(realCardInput?.value) || 0;
    
    const totalZ = zCash + zCard;
    const totalR = rCash + rCard;
    const diff = totalZ - totalR;
    const cashDiff = zCash - rCash;
    const cardDiff = zCard - rCard;
    
    if (totalZCloseSpan) totalZCloseSpan.textContent = `$${totalZ.toFixed(2)}`;
    if (totalRealSpan) totalRealSpan.textContent = `$${totalR.toFixed(2)}`;
    if (totalDifferenceSpan) totalDifferenceSpan.textContent = `$${diff.toFixed(2)}`;
    
    if (cierreStatusDiv) {
        const isCorrect = Math.abs(diff) <= 0.01;
        cierreStatusDiv.textContent = `${t('status')}: ${isCorrect ? '✅ ' + t('correct') : '⚠️ ' + t('review')}`;
        cierreStatusDiv.className = `calc-status ${isCorrect ? 'correct' : 'review'}`;
    }
}

function saveCierre() {
    const date = cierreDateInput?.value;
    const zCash = parseFloat(cierreZCashInput?.value) || 0;
    const zCard = parseFloat(cierreZCardInput?.value) || 0;
    const rCash = parseFloat(realCashInput?.value) || 0;
    const rCard = parseFloat(realCardInput?.value) || 0;
    const notes = cierreNotesInput?.value.trim() || '';
    
    if (!date) {
        alert(t('enterDate'));
        return;
    }
    
    if (zCash === 0 && zCard === 0 && rCash === 0 && rCard === 0) {
        alert(t('enterAtLeastOneValue'));
        return;
    }
    
    // Validate numeric values
    if (zCash < 0 || zCard < 0 || rCash < 0 || rCard < 0) {
        alert(t('negativeValue'));
        return;
    }
    
    if (!isFinite(zCash) || !isFinite(zCard) || !isFinite(rCash) || !isFinite(rCard)) {
        alert(t('invalidNumber'));
        return;
    }
    
    const totalZ = zCash + zCard;
    const totalR = rCash + rCard;
    const diff = totalZ - totalR;
    const cashDiff = zCash - rCash;
    const cardDiff = zCard - rCard;
    const status = Math.abs(diff) <= 0.01 ? 'correct' : 'review';
    
    if (!inventoryData.cierres) inventoryData.cierres = [];
    
    // Check if already exists for this date
    const existingIndex = inventoryData.cierres.findIndex(c => c.date === date);
    const cierreData = {
        id: existingIndex >= 0 ? inventoryData.cierres[existingIndex].id : generateId(),
        date,
        zCash,
        zCard,
        rCash,
        rCard,
        totalZ,
        totalR,
        diff,
        cashDiff,
        cardDiff,
        status,
        notes
    };
    
    if (existingIndex >= 0) {
        if (confirm(`Already exists a close for ${date}. Replace it?`)) {
            inventoryData.cierres[existingIndex] = cierreData;
        } else {
            return;
        }
    } else {
        inventoryData.cierres.push(cierreData);
    }
    
    saveData();
    resetCierreForm();
    renderCierres();
    alert(`${t('closeSavedFor')} ${date}`);
}

function resetCierreForm() {
    if (cierreForm) cierreForm.reset();
    if (cierreDateInput) cierreDateInput.value = new Date().toISOString().split('T')[0];
    calculateCierre();
}

function exportCierreToExcel() {
    if (!inventoryData.cierres || inventoryData.cierres.length === 0) {
        alert(t('noDataExport'));
        return;
    }
    
    // Create CSV content
    let csv = 'CIERRE DEL DIA - RESTAURANTE CAN MIQUEL\n\n';
    csv += 'Fecha,CIERRE Z Efectivo,CIERRE Z Tarjetas,Efectivo Real,Tarjetas Real,Total Cierre Z,Total Real,Dif. Efectivo,Dif. Tarjetas,Dif. Total,Estado,Observaciones\n';
    
    // Sort by date ascending
    const sorted = [...inventoryData.cierres].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    let totalZCash = 0, totalZCard = 0, totalRCash = 0, totalRCard = 0;
    let totalZSum = 0, totalRSum = 0, totalDiffSum = 0;
    
    sorted.forEach(c => {
        const status = c.status === 'correct' ? 'CORRECTO' : 'REVISAR';
        csv += `${c.date},${c.zCash.toFixed(2)},${c.zCard.toFixed(2)},${c.rCash.toFixed(2)},${c.rCard.toFixed(2)},${c.totalZ.toFixed(2)},${c.totalR.toFixed(2)},${c.cashDiff.toFixed(2)},${c.cardDiff.toFixed(2)},${c.diff.toFixed(2)},${status},"${c.notes || ''}"\n`;
        
        totalZCash += c.zCash;
        totalZCard += c.zCard;
        totalRCash += c.rCash;
        totalRCard += c.rCard;
        totalZSum += c.totalZ;
        totalRSum += c.totalR;
        totalDiffSum += c.diff;
    });
    
    // Add totals row
    csv += `\nTOTALES,${totalZCash.toFixed(2)},${totalZCard.toFixed(2)},${totalRCash.toFixed(2)},${totalRCard.toFixed(2)},${totalZSum.toFixed(2)},${totalRSum.toFixed(2)},${(totalZCash - totalRCash).toFixed(2)},${(totalZCard - totalRCard).toFixed(2)},${totalDiffSum.toFixed(2)},,\n`;
    
    // Add summary
    csv += `\nRESUMEN\n`;
    csv += `Total de cierres:,${sorted.length}\n`;
    csv += `Cierres correctos:,${sorted.filter(c => c.status === 'correct').length}\n`;
    csv += `Cierres a revisar:,${sorted.filter(c => c.status === 'review').length}\n`;
    const avgDiff = sorted.length > 0 ? (totalDiffSum / sorted.length).toFixed(2) : '0.00';
    csv += `Diferencia promedio:,$${avgDiff}\n`;
    
    // Create and download file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().split('T')[0];
    const filename = `cierre-restaurante-${date}.csv`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(t('exportSuccess'));
}

function renderCierres() {
    if (!cierreCards || !cierreEmpty) return;
    
    if (!inventoryData.cierres || inventoryData.cierres.length === 0) {
        cierreCards.innerHTML = '';
        cierreEmpty.classList.add('visible');
        return;
    }
    
    cierreEmpty.classList.remove('visible');
    
    // Sort by date descending
    const sorted = [...inventoryData.cierres].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    cierreCards.innerHTML = '';
    sorted.forEach((cierre) => {
        const card = document.createElement('div');
        card.className = `cierre-history-card ${cierre.status}`;
        
        card.innerHTML = `
            <div class="cierre-card-header">
                <div class="cierre-card-date">📅 ${formatDate(cierre.date)}</div>
                <div class="cierre-card-status ${cierre.status}">
                    ${cierre.status === 'correct' ? '✅ ' + t('correct') : '⚠️ ' + t('review')}
                </div>
            </div>
            <div class="cierre-card-details">
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('cierreZCash')}</span>
                    <span class="cierre-detail-value">$${cierre.zCash.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('realCash')}</span>
                    <span class="cierre-detail-value">$${cierre.rCash.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('cierreZCard')}</span>
                    <span class="cierre-detail-value">$${cierre.zCard.toFixed(2)}</span>
                </div>
                <div class="cierre-detail">
                    <span class="cierre-detail-label">${t('realCard')}</span>
                    <span class="cierre-detail-value">$${cierre.rCard.toFixed(2)}</span>
                </div>
            </div>
            <div class="cierre-card-summary">
                <div class="cierre-summary-row">
                    <span>${t('cashDiff')}:</span>
                    <strong style="color: ${Math.abs(cierre.cashDiff) <= 0.01 ? '#6b9b6b' : '#c9a349'};">$${cierre.cashDiff.toFixed(2)}</strong>
                </div>
                <div class="cierre-summary-row">
                    <span>${t('cardDiff')}:</span>
                    <strong style="color: ${Math.abs(cierre.cardDiff) <= 0.01 ? '#6b9b6b' : '#c9a349'};">$${cierre.cardDiff.toFixed(2)}</strong>
                </div>
                <div class="cierre-summary-row total">
                    <span>${t('difference')}:</span>
                    <strong style="color: ${Math.abs(cierre.diff) <= 0.01 ? '#6b9b6b' : '#b85450'};">$${cierre.diff.toFixed(2)}</strong>
                </div>
            </div>
            ${cierre.notes ? `<div class="item-notes" style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--color-border);">${escapeHtml(cierre.notes)}</div>` : ''}
        `;
        
        cierreCards.appendChild(card);
    });
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
        const invSection = document.getElementById('inventorySection');
        if (invSection) invSection.classList.add('active');
        renderMermaxChart();
    } else if (tabName === 'reservations') {
        const resSection = document.getElementById('reservationsSection');
        if (resSection) resSection.classList.add('active');
        renderReservations();
    } else if (tabName === 'cierre') {
        const cierreSection = document.getElementById('cierreSection');
        if (cierreSection) cierreSection.classList.add('active');
        renderCierres();
        if (cierreDateInput) cierreDateInput.value = new Date().toISOString().split('T')[0];
        calculateCierre();
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
        alert(t('fillAllFields'));
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

    // Cierre events
    if (addCierreBtn) addCierreBtn.addEventListener('click', saveCierre);
    if (exportCierreBtn) exportCierreBtn.addEventListener('click', exportCierreToExcel);
    if (cierreZCashInput) cierreZCashInput.addEventListener('input', calculateCierre);
    if (cierreZCardInput) cierreZCardInput.addEventListener('input', calculateCierre);
    if (realCashInput) realCashInput.addEventListener('input', calculateCierre);
    if (realCardInput) realCardInput.addEventListener('input', calculateCierre);
    
    // Other events
    if (searchInput) searchInput.addEventListener('input', renderItems);
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (importBtn) importBtn.addEventListener('click', () => importFile && importFile.click());
    if (importFile) importFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) { importData(e.target.files[0]); e.target.value = ''; }
    });
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    
    // Check Data button - diagnostic tool
    const checkDataBtn = document.getElementById('checkDataBtn');
    if (checkDataBtn) {
        checkDataBtn.addEventListener('click', () => {
            console.log('🔍 Data Source Check');
            
            // Check localStorage
            const localData = localStorage.getItem(STORAGE_KEY);
            let localInfo = 'None';
            if (localData) {
                try {
                    const parsed = JSON.parse(localData);
                    const families = parsed.families?.length || 0;
                    const items = parsed.items?.length || 0;
                    localInfo = `${families} families, ${items} items`;
                } catch (e) {
                    localInfo = 'Corrupted';
                }
            }
            
            // Check current memory
            const memFamilies = inventoryData.families?.length || 0;
            const memItems = inventoryData.items?.length || 0;
            
            // Check Firebase status
            const firebaseInfo = firebaseReady ? 'Connected' : 'Not initialized';
            
            const message = `📊 DATA SOURCES:\n\n` +
                `🔥 Firebase: ${firebaseInfo}\n` +
                `💾 LocalStorage: ${localInfo}\n` +
                `🧠 Current Memory: ${memFamilies} families, ${memItems} items\n\n` +
                `Check browser console for details.`;
            
            alert(message);
            
            console.log('📊 DETAILED DATA CHECK:');
            console.log('Firebase Ready:', firebaseReady);
            console.log('Database Object:', database);
            console.log('LocalStorage Data:', localData);
            console.log('Current inventoryData:', inventoryData);
        });
    }
    
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('🔄 Manual refresh triggered');
            refreshBtn.style.transform = 'rotate(360deg)';
            refreshBtn.style.transition = 'transform 0.5s';
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
            }, 500);
            
            // Reload data
            if (firebaseReady && database) {
                loadData();
            } else {
                loadFromLocalStorage();
            }
            
            // Re-render everything
            renderFamilies();
            if (currentFamilyId) {
                renderItems();
                renderMermaxChart();
            }
        });
    }
}

// ===== Initialize =====
// iOS viewport height fix
function setIOSViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set viewport height on load and resize (important for iOS)
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setIOSViewportHeight);
}
window.addEventListener('resize', setIOSViewportHeight);
window.addEventListener('orientationchange', setIOSViewportHeight);
setIOSViewportHeight();

// Page visibility handler (important for iOS Safari)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && inventoryData && inventoryData.families) {
        console.log('👀 Page became visible, re-rendering...');
        renderFamilies();
        if (currentFamilyId) {
            renderItems();
            renderMermaxChart();
        }
    }
});

// Page focus handler (iOS Safari)
window.addEventListener('focus', () => {
    console.log('🎯 Window focused, checking state...');
    if (inventoryData && inventoryData.families && inventoryData.families.length > 0) {
        renderFamilies();
        if (currentFamilyId) {
            renderItems();
            renderMermaxChart();
        }
    }
});

function updateLoadingStatus(message) {
    const statusEl = document.getElementById('loadingStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
    console.log('📢', message);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App starting...');
    updateLoadingStatus('Initializing...');
    
    // Fix iOS viewport height
    setIOSViewportHeight();
    
    // Initialize DOM elements
    updateLoadingStatus('Setting up interface...');
    initDOMElements();
    
    // Load language
    updateLoadingStatus('Loading language settings...');
    loadLanguage();
    
    // Setup event listeners
    updateLoadingStatus('Setting up controls...');
    setupEventListeners();
    
    // CHANGED: Load from localStorage FIRST (offline-first approach for iOS)
    updateLoadingStatus('Loading data...');
    const hasLocalData = loadFromLocalStorageSync();
    
    if (hasLocalData) {
        console.log('✅ Loaded from localStorage, showing app');
        updateLoadingStatus('Ready!');
        hideLoadingScreen();
    } else {
        updateLoadingStatus('No local data, initializing...');
    }
    
    // Try Firebase in background (don't block the UI)
    setTimeout(() => {
        updateLoadingStatus('Connecting to server...');
        if (initFirebase()) {
            console.log('🔥 Firebase ready, syncing data...');
            loadData();
            hideLoadingScreen();
        } else {
            console.log('📂 Firebase unavailable, using offline mode');
            if (!hasLocalData) {
                // No local data and no Firebase, initialize defaults
                initializeDefaultData();
                renderFamilies();
                if (inventoryData.families.length > 0) {
                    selectFamily(inventoryData.families[0].id);
                }
                saveToLocalStorage();
            }
            hideLoadingScreen();
        }
    }, 100); // Small delay to ensure UI is ready
});