// Question Database
const questionDatabase = {
    physics: [
        {
            id: 1,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the SI unit of force?',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correctAnswer: 0,
            explanation: 'Force is measured in Newtons (N) in the SI system. 1 N = 1 kg⋅m/s²'
        },
        {
            id: 2,
            type: 'mcq',
            difficulty: 'medium',
            question: 'A ball is thrown vertically upwards with a velocity of 20 m/s. What is the maximum height it will reach? (g = 10 m/s²)',
            options: ['20 m', '40 m', '10 m', '30 m'],
            correctAnswer: 0,
            explanation: 'Using v² = u² - 2gh, at maximum height v = 0. So h = u²/(2g) = (20)²/(2×10) = 400/20 = 20 m'
        },
        {
            id: 3,
            type: 'numerical',
            difficulty: 'hard',
            question: 'A particle moves in a circle of radius 2 m with constant speed 4 m/s. Calculate its centripetal acceleration.',
            answer: 8,
            tolerance: 0.1,
            explanation: 'Centripetal acceleration a = v²/r = (4)²/2 = 16/2 = 8 m/s²'
        },
        {
            id: 4,
            type: 'assertion',
            difficulty: 'medium',
            question: 'Assertion: A body at rest can have potential energy. Reason: Potential energy depends only on the position of the body.',
            assertion: 'A body at rest can have potential energy.',
            reason: 'Potential energy depends only on the position of the body.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason is the correct explanation of assertion. A body at rest can have potential energy due to its position in a gravitational or electric field.'
        },
        {
            id: 5,
            type: 'mcq',
            difficulty: 'easy',
            question: 'Which of the following is a vector quantity?',
            options: ['Speed', 'Distance', 'Displacement', 'Temperature'],
            correctAnswer: 2,
            explanation: 'Displacement is a vector quantity as it has both magnitude and direction. Speed, distance, and temperature are scalar quantities.'
        },
        {
            id: 6,
            type: 'numerical',
            difficulty: 'medium',
            question: 'A force of 10 N acts on a mass of 2 kg. Calculate the acceleration produced.',
            answer: 5,
            tolerance: 0.1,
            explanation: 'Using F = ma, acceleration a = F/m = 10/2 = 5 m/s²'
        },
        {
            id: 7,
            type: 'mcq',
            difficulty: 'hard',
            question: 'A projectile is fired at an angle of 30° with horizontal with velocity 20 m/s. What is the horizontal range? (g = 10 m/s²)',
            options: ['20√3 m', '40√3 m', '20 m', '40 m'],
            correctAnswer: 1,
            explanation: 'Range R = (u²sin2θ)/g = (20² × sin60°)/10 = (400 × √3/2)/10 = 20√3 m'
        },
        {
            id: 8,
            type: 'numerical',
            difficulty: 'hard',
            question: 'A block of mass 2 kg slides down a rough inclined plane of angle 30° with coefficient of friction 0.3. Calculate the acceleration of the block. (g = 10 m/s²)',
            answer: 2.4,
            tolerance: 0.1,
            explanation: 'a = g(sinθ - μcosθ) = 10(sin30° - 0.3cos30°) = 10(0.5 - 0.3×0.866) = 10(0.5 - 0.26) = 2.4 m/s²'
        },
        {
            id: 9,
            type: 'mcq',
            difficulty: 'hard',
            question: 'A particle moves in SHM with amplitude A and frequency f. What is the maximum velocity?',
            options: ['2πfA', 'πfA', '4πfA', 'πfA/2'],
            correctAnswer: 0,
            explanation: 'Maximum velocity in SHM is v_max = ωA = 2πfA, where ω = 2πf is the angular frequency.'
        },
        {
            id: 10,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: The work done by a conservative force is path independent. Reason: Conservative forces have potential energy associated with them.',
            assertion: 'The work done by a conservative force is path independent.',
            reason: 'Conservative forces have potential energy associated with them.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. Conservative forces like gravity and spring force have potential energy and their work depends only on initial and final positions.'
        },
        {
            id: 11,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the unit of power?',
            options: ['Joule', 'Watt', 'Newton', 'Pascal'],
            correctAnswer: 1,
            explanation: 'Power is measured in Watts (W). 1 W = 1 J/s'
        },
        {
            id: 12,
            type: 'mcq',
            difficulty: 'easy',
            question: 'Which law states that every action has an equal and opposite reaction?',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
            correctAnswer: 2,
            explanation: 'Newton\'s Third Law states that for every action, there is an equal and opposite reaction.'
        },
        {
            id: 13,
            type: 'numerical',
            difficulty: 'easy',
            question: 'A car travels 100 km in 2 hours. What is its average speed?',
            answer: 50,
            tolerance: 0.1,
            explanation: 'Average speed = total distance / total time = 100 km / 2 hours = 50 km/h'
        },
        {
            id: 14,
            type: 'mcq',
            difficulty: 'medium',
            question: 'What is the acceleration due to gravity on Earth?',
            options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '11 m/s²'],
            correctAnswer: 0,
            explanation: 'The standard acceleration due to gravity on Earth is approximately 9.8 m/s²'
        },
        {
            id: 15,
            type: 'numerical',
            difficulty: 'medium',
            question: 'A force of 20 N is applied to move a 5 kg object. Calculate the acceleration.',
            answer: 4,
            tolerance: 0.1,
            explanation: 'Using F = ma, acceleration a = F/m = 20/5 = 4 m/s²'
        },
        {
            id: 16,
            type: 'mcq',
            difficulty: 'hard',
            question: 'A satellite orbits Earth at a height where the gravitational force is 1/4th of that at the surface. What is the orbital speed?',
            options: ['√(gR/2)', '√(gR)', '√(2gR)', '√(gR/4)'],
            correctAnswer: 0,
            explanation: 'At height h where g\' = g/4, orbital speed v = √(g\'r) = √((g/4)(R+h)) = √(gR/2) for h = R'
        },
        {
            id: 17,
            type: 'numerical',
            difficulty: 'hard',
            question: 'A spring with spring constant 200 N/m is compressed by 0.1 m. Calculate the potential energy stored.',
            answer: 1,
            tolerance: 0.1,
            explanation: 'Potential energy U = (1/2)kx² = (1/2) × 200 × (0.1)² = 100 × 0.01 = 1 J'
        },
        {
            id: 18,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: The escape velocity from Earth is independent of the mass of the object. Reason: Escape velocity depends only on the gravitational field strength.',
            assertion: 'The escape velocity from Earth is independent of the mass of the object.',
            reason: 'Escape velocity depends only on the gravitational field strength.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. Escape velocity v = √(2GM/R) is independent of the escaping object\'s mass.'
        }
    ],
    chemistry: [
        {
            id: 1,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the atomic number of Carbon?',
            options: ['6', '12', '14', '8'],
            correctAnswer: 0,
            explanation: 'Carbon has atomic number 6, meaning it has 6 protons in its nucleus.'
        },
        {
            id: 2,
            type: 'mcq',
            difficulty: 'medium',
            question: 'Which of the following is an example of a covalent bond?',
            options: ['NaCl', 'HCl', 'CaCl₂', 'MgO'],
            correctAnswer: 1,
            explanation: 'HCl is a covalent compound where hydrogen and chlorine share electrons. NaCl, CaCl₂, and MgO are ionic compounds.'
        },
        {
            id: 3,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Calculate the molarity of a solution containing 0.5 moles of NaCl in 250 mL of solution.',
            answer: 2,
            tolerance: 0.1,
            explanation: 'Molarity = moles of solute / volume of solution in liters = 0.5 / 0.25 = 2 M'
        },
        {
            id: 4,
            type: 'assertion',
            difficulty: 'medium',
            question: 'Assertion: Noble gases are chemically inert. Reason: Noble gases have completely filled valence shells.',
            assertion: 'Noble gases are chemically inert.',
            reason: 'Noble gases have completely filled valence shells.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. Noble gases have stable electronic configurations.'
        },
        {
            id: 5,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the chemical formula of water?',
            options: ['H₂O', 'H₂O₂', 'HO', 'H₃O'],
            correctAnswer: 0,
            explanation: 'Water has the chemical formula H₂O, consisting of two hydrogen atoms and one oxygen atom.'
        },
        {
            id: 6,
            type: 'numerical',
            difficulty: 'medium',
            question: 'Calculate the number of moles in 18 grams of water (H₂O). (Molar mass of H₂O = 18 g/mol)',
            answer: 1,
            tolerance: 0.1,
            explanation: 'Number of moles = mass / molar mass = 18 g / 18 g/mol = 1 mole'
        },
        {
            id: 7,
            type: 'mcq',
            difficulty: 'hard',
            question: 'Which of the following has the highest electronegativity?',
            options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
            correctAnswer: 0,
            explanation: 'Fluorine has the highest electronegativity (4.0) among the given options, as electronegativity decreases down the group.'
        },
        {
            id: 8,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Calculate the pH of a 0.01 M solution of NH₃ (Kb = 1.8 × 10⁻⁵).',
            answer: 10.6,
            tolerance: 0.1,
            explanation: 'For weak base: [OH⁻] = √(Kb × C) = √(1.8×10⁻⁵ × 0.01) = √(1.8×10⁻⁷) = 4.24×10⁻⁴. pOH = -log(4.24×10⁻⁴) = 3.37. pH = 14 - 3.37 = 10.63'
        },
        {
            id: 9,
            type: 'mcq',
            difficulty: 'hard',
            question: 'In the reaction 2A + 3B → C, if the rate of disappearance of A is 0.1 M/s, what is the rate of formation of C?',
            options: ['0.05 M/s', '0.1 M/s', '0.2 M/s', '0.3 M/s'],
            correctAnswer: 0,
            explanation: 'Rate of formation of C = (1/2) × rate of disappearance of A = (1/2) × 0.1 = 0.05 M/s'
        },
        {
            id: 10,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: Hybridization explains the geometry of molecules. Reason: Hybridization involves mixing of atomic orbitals of similar energies.',
            assertion: 'Hybridization explains the geometry of molecules.',
            reason: 'Hybridization involves mixing of atomic orbitals of similar energies.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. Hybridization of atomic orbitals creates new hybrid orbitals that determine molecular geometry.'
        },
        {
            id: 11,
            type: 'mcq',
            difficulty: 'hard',
            question: 'Which of the following molecules has sp³ hybridization?',
            options: ['CH₄', 'C₂H₄', 'C₂H₂', 'Benzene'],
            correctAnswer: 0,
            explanation: 'CH₄ has sp³ hybridization with tetrahedral geometry. C₂H₄ has sp² hybridization, C₂H₂ has sp hybridization, and benzene has sp² hybridization.'
        },
        {
            id: 12,
            type: 'mcq',
            difficulty: 'hard',
            question: 'The rate constant of a first-order reaction is 0.0693 min⁻¹. What is the half-life of the reaction?',
            options: ['5 min', '10 min', '15 min', '20 min'],
            correctAnswer: 1,
            explanation: 'For first-order reaction: t₁/₂ = 0.693/k = 0.693/0.0693 = 10 minutes'
        },
        {
            id: 13,
            type: 'mcq',
            difficulty: 'hard',
            question: 'Which of the following is the strongest acid?',
            options: ['HF', 'HCl', 'HBr', 'HI'],
            correctAnswer: 3,
            explanation: 'HI is the strongest acid among the given options. Acid strength increases down the group due to decreasing bond strength and increasing bond length.'
        },
        {
            id: 14,
            type: 'mcq',
            difficulty: 'hard',
            question: 'In the reaction N₂ + 3H₂ ⇌ 2NH₃, if the equilibrium constant Kc = 4, what is the value of Kp at 300K?',
            options: ['4', '0.33', '12', '0.083'],
            correctAnswer: 1,
            explanation: 'Kp = Kc(RT)^Δn where Δn = 2 - (1+3) = -2. Kp = 4 × (0.0821 × 300)^(-2) = 4 × (24.63)^(-2) = 4/606.5 ≈ 0.33'
        },
        {
            id: 15,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the chemical symbol for Gold?',
            options: ['Go', 'Gd', 'Au', 'Ag'],
            correctAnswer: 2,
            explanation: 'Gold has the chemical symbol Au, derived from its Latin name "aurum".'
        },
        {
            id: 16,
            type: 'mcq',
            difficulty: 'easy',
            question: 'Which gas makes up about 78% of Earth\'s atmosphere?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
            correctAnswer: 1,
            explanation: 'Nitrogen (N₂) makes up approximately 78% of Earth\'s atmosphere.'
        },
        {
            id: 17,
            type: 'numerical',
            difficulty: 'easy',
            question: 'How many atoms are in 1 mole of any element?',
            answer: 6.022,
            tolerance: 0.001,
            explanation: '1 mole contains Avogadro\'s number of particles: 6.022 × 10²³ atoms'
        },
        {
            id: 18,
            type: 'mcq',
            difficulty: 'medium',
            question: 'What is the oxidation state of sulfur in H₂SO₄?',
            options: ['+2', '+4', '+6', '+8'],
            correctAnswer: 2,
            explanation: 'In H₂SO₄, sulfur has an oxidation state of +6. H = +1, O = -2, so S = +6 to balance the charges.'
        },
        {
            id: 19,
            type: 'numerical',
            difficulty: 'medium',
            question: 'Calculate the number of moles in 36 grams of water (H₂O). (Molar mass of H₂O = 18 g/mol)',
            answer: 2,
            tolerance: 0.1,
            explanation: 'Number of moles = mass / molar mass = 36 g / 18 g/mol = 2 moles'
        },
        {
            id: 20,
            type: 'mcq',
            difficulty: 'hard',
            question: 'Which of the following has the highest bond energy?',
            options: ['N≡N', 'O=O', 'C≡C', 'H-H'],
            correctAnswer: 0,
            explanation: 'N≡N (nitrogen triple bond) has the highest bond energy at 945 kJ/mol, making it very stable.'
        },
        {
            id: 21,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Calculate the pH of a 0.001 M solution of HCl.',
            answer: 3,
            tolerance: 0.1,
            explanation: 'HCl is a strong acid, so [H⁺] = 0.001 M. pH = -log[H⁺] = -log(0.001) = 3'
        },
        {
            id: 22,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: Le Chatelier\'s principle applies to all chemical equilibria. Reason: Chemical equilibria are dynamic processes that respond to changes in conditions.',
            assertion: 'Le Chatelier\'s principle applies to all chemical equilibria.',
            reason: 'Chemical equilibria are dynamic processes that respond to changes in conditions.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. Le Chatelier\'s principle states that equilibria shift to counteract changes in concentration, temperature, or pressure.'
        }
    ],
    mathematics: [
        {
            id: 1,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the derivative of x²?',
            options: ['x', '2x', 'x²', '2x²'],
            correctAnswer: 1,
            explanation: 'Using the power rule: d/dx(x²) = 2x¹ = 2x'
        },
        {
            id: 2,
            type: 'mcq',
            difficulty: 'medium',
            question: 'What is the value of sin(30°)?',
            options: ['1/2', '√3/2', '1', '0'],
            correctAnswer: 0,
            explanation: 'sin(30°) = 1/2, which is a standard trigonometric value.'
        },
        {
            id: 3,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Find the value of ∫₀¹ x² dx',
            answer: 0.333,
            tolerance: 0.01,
            explanation: '∫₀¹ x² dx = [x³/3]₀¹ = 1³/3 - 0³/3 = 1/3 ≈ 0.333'
        },
        {
            id: 4,
            type: 'assertion',
            difficulty: 'medium',
            question: 'Assertion: The sum of angles in a triangle is 180°. Reason: This is a fundamental property of Euclidean geometry.',
            assertion: 'The sum of angles in a triangle is 180°.',
            reason: 'This is a fundamental property of Euclidean geometry.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. The sum of interior angles in any triangle is always 180° in Euclidean geometry.'
        },
        {
            id: 5,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the value of log₁₀(100)?',
            options: ['1', '2', '10', '100'],
            correctAnswer: 1,
            explanation: 'log₁₀(100) = log₁₀(10²) = 2 × log₁₀(10) = 2 × 1 = 2'
        },
        {
            id: 6,
            type: 'numerical',
            difficulty: 'medium',
            question: 'Find the distance between points (0,0) and (3,4).',
            answer: 5,
            tolerance: 0.1,
            explanation: 'Using distance formula: d = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5'
        },
        {
            id: 7,
            type: 'mcq',
            difficulty: 'hard',
            question: 'What is the limit of (x² - 1)/(x - 1) as x approaches 1?',
            options: ['0', '1', '2', 'Undefined'],
            correctAnswer: 2,
            explanation: 'lim(x→1) (x²-1)/(x-1) = lim(x→1) (x+1)(x-1)/(x-1) = lim(x→1) (x+1) = 1+1 = 2'
        },
        {
            id: 8,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Find the area bounded by the curves y = x² and y = 2x - x².',
            answer: 0.33,
            tolerance: 0.01,
            explanation: 'Points of intersection: x² = 2x - x² → 2x² = 2x → x = 0, 1. Area = ∫₀¹(2x - x² - x²)dx = ∫₀¹(2x - 2x²)dx = [x² - 2x³/3]₀¹ = 1 - 2/3 = 1/3 ≈ 0.33'
        },
        {
            id: 9,
            type: 'mcq',
            difficulty: 'hard',
            question: 'If f(x) = x³ - 3x + 1, then the number of real roots of f(x) = 0 is:',
            options: ['1', '2', '3', '0'],
            correctAnswer: 2,
            explanation: 'f\'(x) = 3x² - 3 = 3(x² - 1) = 3(x-1)(x+1). Critical points at x = ±1. f(-1) = 3, f(1) = -1. Since f(-∞) = -∞, f(∞) = ∞, and f(1) < 0, there are 3 real roots.'
        },
        {
            id: 10,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: The derivative of a function at a point gives the slope of the tangent. Reason: The derivative represents the instantaneous rate of change.',
            assertion: 'The derivative of a function at a point gives the slope of the tangent.',
            reason: 'The derivative represents the instantaneous rate of change.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. The derivative at a point gives both the slope of the tangent and the instantaneous rate of change.'
        },
        {
            id: 11,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            correctAnswer: 1,
            explanation: '2 + 2 = 4'
        },
        {
            id: 12,
            type: 'mcq',
            difficulty: 'easy',
            question: 'What is the value of π (pi) to 2 decimal places?',
            options: ['3.14', '3.15', '3.16', '3.17'],
            correctAnswer: 0,
            explanation: 'π ≈ 3.14159, so to 2 decimal places it is 3.14'
        },
        {
            id: 13,
            type: 'numerical',
            difficulty: 'easy',
            question: 'What is 15% of 200?',
            answer: 30,
            tolerance: 0.1,
            explanation: '15% of 200 = (15/100) × 200 = 0.15 × 200 = 30'
        },
        {
            id: 14,
            type: 'mcq',
            difficulty: 'medium',
            question: 'What is the derivative of sin(x)?',
            options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
            correctAnswer: 0,
            explanation: 'The derivative of sin(x) is cos(x)'
        },
        {
            id: 15,
            type: 'numerical',
            difficulty: 'medium',
            question: 'Find the value of ∫₀² x dx',
            answer: 2,
            tolerance: 0.1,
            explanation: '∫₀² x dx = [x²/2]₀² = (2)²/2 - (0)²/2 = 4/2 - 0 = 2'
        },
        {
            id: 16,
            type: 'mcq',
            difficulty: 'hard',
            question: 'What is the value of lim(x→0) (sin x)/x?',
            options: ['0', '1', '∞', 'Undefined'],
            correctAnswer: 1,
            explanation: 'This is a fundamental limit: lim(x→0) (sin x)/x = 1'
        },
        {
            id: 17,
            type: 'numerical',
            difficulty: 'hard',
            question: 'Find the derivative of x³ + 2x² - 5x + 1 at x = 2.',
            answer: 19,
            tolerance: 0.1,
            explanation: 'f(x) = x³ + 2x² - 5x + 1, f\'(x) = 3x² + 4x - 5. At x = 2: f\'(2) = 3(4) + 4(2) - 5 = 12 + 8 - 5 = 15'
        },
        {
            id: 18,
            type: 'assertion',
            difficulty: 'hard',
            question: 'Assertion: The sum of the angles in any triangle is 180°. Reason: This is true only in Euclidean geometry.',
            assertion: 'The sum of the angles in any triangle is 180°.',
            reason: 'This is true only in Euclidean geometry.',
            correctAnswer: 'A',
            explanation: 'Both assertion and reason are true, and reason correctly explains assertion. The 180° sum is specific to Euclidean (flat) geometry.'
        }
    ]
};

// Application State
let currentQuestion = null;
let userAnswer = null;
let askedQuestions = []; // Track asked questions to avoid repeats
let stats = {
    attempted: 0,
    correct: 0
};

// DOM Elements
const subjectSelect = document.getElementById('subject');
const difficultySelect = document.getElementById('difficulty');
const questionTypeSelect = document.getElementById('questionType');
const generateBtn = document.getElementById('generateBtn');
const questionContainer = document.getElementById('questionContainer');
const statsContainer = document.getElementById('stats');
const attemptedCount = document.getElementById('attemptedCount');
const correctCount = document.getElementById('correctCount');
const accuracyDisplay = document.getElementById('accuracy');
const resetStatsBtn = document.getElementById('resetStats');

// Event Listeners
generateBtn.addEventListener('click', generateQuestion);
resetStatsBtn.addEventListener('click', resetStats);

// Load saved stats from localStorage
loadStats();

function generateQuestion() {
    const selectedSubject = subjectSelect.value;
    const selectedDifficulty = difficultySelect.value;
    const selectedType = questionTypeSelect.value;
    
    // Filter questions based on criteria
    let availableQuestions = [];
    
    if (selectedSubject === 'all') {
        availableQuestions = [...questionDatabase.physics, ...questionDatabase.chemistry, ...questionDatabase.mathematics];
    } else {
        availableQuestions = questionDatabase[selectedSubject];
    }
    
    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
        availableQuestions = availableQuestions.filter(q => q.difficulty === selectedDifficulty);
    }
    
    // Filter by type
    if (selectedType !== 'all') {
        availableQuestions = availableQuestions.filter(q => q.type === selectedType);
    }
    
    if (availableQuestions.length === 0) {
        showNoQuestionsMessage();
        return;
    }
    
    // Filter out already asked questions
    const unaskedQuestions = availableQuestions.filter(q => !askedQuestions.includes(q.id));
    
    // If all questions have been asked, reset the asked questions list
    if (unaskedQuestions.length === 0) {
        askedQuestions = [];
        const resetUnaskedQuestions = availableQuestions.filter(q => !askedQuestions.includes(q.id));
        if (resetUnaskedQuestions.length === 0) {
            showNoQuestionsMessage();
            return;
        }
        currentQuestion = resetUnaskedQuestions[Math.floor(Math.random() * resetUnaskedQuestions.length)];
    } else {
        // Select random question from unasked questions
        const randomIndex = Math.floor(Math.random() * unaskedQuestions.length);
        currentQuestion = unaskedQuestions[randomIndex];
    }
    
    // Add current question to asked questions
    askedQuestions.push(currentQuestion.id);
    userAnswer = null;
    
    displayQuestion(currentQuestion);
    showStats();
}

function displayQuestion(question) {
    const questionHTML = createQuestionHTML(question);
    questionContainer.innerHTML = questionHTML;
    
    // Add event listeners for the new question
    addQuestionEventListeners(question);
}

function createQuestionHTML(question) {
    const subjectName = getSubjectName(question);
    const difficultyClass = `difficulty-${question.difficulty}`;
    
    let optionsHTML = '';
    let questionContent = '';
    
    if (question.type === 'mcq') {
        optionsHTML = question.options.map((option, index) => `
            <div class="option" data-index="${index}">
                <input type="radio" name="answer" value="${index}" id="option${index}">
                <label for="option${index}">${option}</label>
            </div>
        `).join('');
        
        questionContent = `
            <div class="question-text">${question.question}</div>
            <div class="options">${optionsHTML}</div>
        `;
    } else if (question.type === 'numerical') {
        questionContent = `
            <div class="question-text">${question.question}</div>
            <div class="numerical-input-container">
                <input type="number" class="numerical-input" id="numericalAnswer" placeholder="Enter your numerical answer" step="0.01" autocomplete="off">
                <div class="input-hints">
                    <small>💡 Tip: Use decimal numbers (e.g., 3.14, 0.5) and press Enter to submit</small>
                </div>
            </div>
        `;
    } else if (question.type === 'assertion') {
        questionContent = `
            <div class="assertion-reason">
                <div class="assertion-text">${question.assertion}</div>
                <div class="reason-text">${question.reason}</div>
            </div>
            <div class="options">
                <div class="option" data-value="A">
                    <input type="radio" name="answer" value="A" id="optionA">
                    <label for="optionA">A. Both Assertion and Reason are true and Reason is the correct explanation of Assertion</label>
                </div>
                <div class="option" data-value="B">
                    <input type="radio" name="answer" value="B" id="optionB">
                    <label for="optionB">B. Both Assertion and Reason are true but Reason is not the correct explanation of Assertion</label>
                </div>
                <div class="option" data-value="C">
                    <input type="radio" name="answer" value="C" id="optionC">
                    <label for="optionC">C. Assertion is true but Reason is false</label>
                </div>
                <div class="option" data-value="D">
                    <input type="radio" name="answer" value="D" id="optionD">
                    <label for="optionD">D. Assertion is false but Reason is true</label>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="question active">
            <div class="question-header">
                <div class="question-meta">
                    <span class="subject-tag">${subjectName}</span>
                    <span class="difficulty-tag ${difficultyClass}">${question.difficulty}</span>
                    <span class="type-tag">${question.type.toUpperCase()}</span>
                </div>
            </div>
            ${questionContent}
            <div class="action-buttons">
                <button class="btn btn-primary" id="submitBtn">Submit Answer</button>
                <button class="btn btn-secondary" id="nextBtn" style="display: none;">Next Question</button>
            </div>
            <div class="answer-explanation" id="explanation">
                <div class="explanation-title">Explanation:</div>
                <div class="explanation-text">${question.explanation}</div>
            </div>
        </div>
    `;
}

function addQuestionEventListeners(question) {
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    const options = document.querySelectorAll('.option');
    const numericalInput = document.getElementById('numericalAnswer');
    
    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', () => {
            if (question.type === 'mcq' || question.type === 'assertion') {
                // Remove previous selection
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selection to clicked option
                option.classList.add('selected');
                // Check the radio button
                const radio = option.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
            }
        });
    });
    
    // Handle submit button
    submitBtn.addEventListener('click', () => {
        if (question.type === 'numerical') {
            const answer = parseFloat(numericalInput.value);
            if (isNaN(answer)) {
                alert('Please enter a valid number');
                return;
            }
            userAnswer = answer;
        } else {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (!selectedOption) {
                alert('Please select an answer');
                return;
            }
            userAnswer = selectedOption.value;
        }
        
        checkAnswer(question);
    });
    
    // Enhanced keyboard support for numerical inputs
    if (question.type === 'numerical' && numericalInput) {
        // Auto-focus on numerical input
        numericalInput.focus();
        
        // Handle Enter key to submit
        numericalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const answer = parseFloat(numericalInput.value);
                if (!isNaN(answer)) {
                    userAnswer = answer;
                    checkAnswer(question);
                } else {
                    alert('Please enter a valid number');
                }
            }
        });
        
        // Handle Escape key to clear
        numericalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                numericalInput.value = '';
                numericalInput.focus();
            }
        });
        
        // Real-time validation feedback
        numericalInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value && isNaN(parseFloat(value))) {
                e.target.style.borderColor = '#dc3545';
                e.target.style.backgroundColor = '#f8d7da';
            } else {
                e.target.style.borderColor = '#e9ecef';
                e.target.style.backgroundColor = '#fff';
            }
        });
        
        // Handle Tab key to submit (alternative to Enter)
        numericalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                const answer = parseFloat(numericalInput.value);
                if (!isNaN(answer)) {
                    userAnswer = answer;
                    checkAnswer(question);
                }
            }
        });
        
        // Handle Ctrl+Enter to submit
        numericalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                const answer = parseFloat(numericalInput.value);
                if (!isNaN(answer)) {
                    userAnswer = answer;
                    checkAnswer(question);
                }
            }
        });
    }
    
    // Handle next button
    nextBtn.addEventListener('click', () => {
        generateQuestion();
    });
}

function checkAnswer(question) {
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    const explanation = document.getElementById('explanation');
    const options = document.querySelectorAll('.option');
    
    let isCorrect = false;
    
    if (question.type === 'numerical') {
        const tolerance = question.tolerance || 0.1;
        isCorrect = Math.abs(userAnswer - question.answer) <= tolerance;
    } else {
        isCorrect = userAnswer == question.correctAnswer;
    }
    
    // Update stats
    stats.attempted++;
    if (isCorrect) {
        stats.correct++;
    }
    saveStats();
    updateStatsDisplay();
    
    // Show correct/incorrect styling
    if (question.type === 'mcq' || question.type === 'assertion') {
        options.forEach(option => {
            const radio = option.querySelector('input[type="radio"]');
            if (radio && radio.checked) {
                option.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        });
    } else if (question.type === 'numerical') {
        const input = document.getElementById('numericalAnswer');
        input.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
        input.style.borderColor = isCorrect ? '#28a745' : '#dc3545';
    }
    
    // Show explanation
    explanation.classList.add('show');
    
    // Update buttons
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    
    // Show result message
    const resultMessage = document.createElement('div');
    resultMessage.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
    resultMessage.innerHTML = `
        <h3>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h3>
        <p>${isCorrect ? 'Well done!' : 'Better luck next time!'}</p>
    `;
    resultMessage.style.cssText = `
        text-align: center;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        background: ${isCorrect ? '#d4edda' : '#f8d7da'};
        color: ${isCorrect ? '#155724' : '#721c24'};
        border: 1px solid ${isCorrect ? '#c3e6c3' : '#f5c6cb'};
    `;
    
    explanation.parentNode.insertBefore(resultMessage, explanation);
}

function getSubjectName(question) {
    for (const [subject, questions] of Object.entries(questionDatabase)) {
        if (questions.includes(question)) {
            return subject.charAt(0).toUpperCase() + subject.slice(1);
        }
    }
    return 'Unknown';
}

function showNoQuestionsMessage() {
    questionContainer.innerHTML = `
        <div class="welcome-message">
            <h2>No Questions Available</h2>
            <p>No questions match your current filter criteria. Please try different settings.</p>
        </div>
    `;
}

function showStats() {
    statsContainer.style.display = 'block';
    updateStatsDisplay();
}

function updateStatsDisplay() {
    attemptedCount.textContent = stats.attempted;
    correctCount.textContent = stats.correct;
    const accuracy = stats.attempted > 0 ? ((stats.correct / stats.attempted) * 100).toFixed(1) : 0;
    accuracyDisplay.textContent = `${accuracy}%`;
}

function resetStats() {
    stats = { attempted: 0, correct: 0 };
    saveStats();
    updateStatsDisplay();
}

function saveStats() {
    localStorage.setItem('jeeQuizStats', JSON.stringify(stats));
}

function loadStats() {
    const savedStats = localStorage.getItem('jeeQuizStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
}
