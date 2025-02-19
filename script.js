// script.js mit Supabase-Integration
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Supabase Initialisierung
const SUPABASE_URL = "https://vqqcgervuzbjlqjozzom.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxcWNnZXJ2dXpiamxxam96em9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5ODM5OTAsImV4cCI6MjA1NTU1OTk5MH0.nRKx8T2S1hkE11A6WeWaMUaIE1Bc2N4rC4iwX-zTnwA";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Umfrage absenden
const form = document.getElementById('surveyForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const feature = form.elements['feature'].value;
    if (feature) {
        const { data, error } = await supabase.from('umfrage').insert([{ feature }]);
        if (error) {
            console.error('Fehler beim Speichern:', error);
        } else {
            alert('Danke für deine Teilnahme!');
            form.reset();
            displayResults();
        }
    } else {
        alert('Bitte wähle eine Option aus.');
    }
});

// Ergebnisse anzeigen
async function displayResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Aktuelle Ergebnisse:</h2>';
    const { data, error } = await supabase.from('umfrage').select('*');
    if (error) {
        console.error('Fehler beim Abrufen:', error);
        return;
    }
    const counts = {};
    data.forEach((entry) => {
        counts[entry.feature] = (counts[entry.feature] || 0) + 1;
    });
    for (const [feature, count] of Object.entries(counts)) {
        resultDiv.innerHTML += `<p>${feature}: ${count} Stimmen</p>`;
    }
}

displayResults();
