// Portfolio Configuration File




export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  education: Education[];
  skills: Skills;
  projects: Project[];
  blogPosts: BlogPost[];
}

/**
 * Main portfolio configuration
 */
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Zain Ali",
    title: "Computer Science Student",
    summary:
      "A Computer Science student passionate about software development and machine learning. Skilled in Python and experienced in applying machine learning algorithms to solve real-world problems.",
    email: "Zainalicc97@gmail.com",
    phone: "+92 310 8771304",
    location: "Lahore, Pakistan",
    social: {
      github: "https://github.com/ZainAli5212",
      linkedin: "https://www.linkedin.com/in/zain-ali5212/",
      instagram: "https://www.instagram.com/zain_ali5212/",
    },
  },
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Virtual University of Pakistan",
      period: "2023-2027",
    },
  ],
  skills: {
    Languages: ["Python", "C"],
    "Machine Learning": [
      "Logistic Regression",
      "Linear Regression",
      "Binary Classification",
      "Data Preprocessing",
      "Supervised Learning",
    ],
    "Data Visualization": ["Matplotlib"],
    Tools: ["Git", "VS Code"],
  },
  projects: [
    {
      title: "House Price Prediction",
      description:
        "A machine learning project where I predicted house prices based on a CSV dataset. Data preprocessing was performed, and models like Linear Regression and Random Forest Regressor were used.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      github: "https://github.com/yourusername/house-price-prediction",
      demo: "https://housepriceprediction.demo",
    },
    {
      title: "Handwritten Digit Classification",
      description:
        "A project that classifies handwritten digits (0-9) using machine learning algorithms.",
      tech: ["Python", "TensorFlow", "Keras"],
      github: "https://github.com/yourusername/handwritten-digit-classification",
      demo: "https://digitclassification.demo",
    },
  ],
  blogPosts: [
    {
      title: "Getting Started with Machine Learning in Python",
      slug: "getting-started-machine-learning-python",
      excerpt:
        "Learn how to get started with machine learning in Python, including basic concepts, popular libraries, and building your first model.",
      content: `
# Getting Started with Machine Learning in Python

Machine learning is revolutionizing industries by providing data-driven solutions to complex problems. Python, with its rich ecosystem of libraries, is one of the most popular languages for machine learning. This blog will guide you through the basics of machine learning in Python, from understanding key concepts to building your first model.

## Why Python for Machine Learning?

Python is the go-to language for machine learning due to its simplicity, flexibility, and the availability of powerful libraries such as NumPy, Pandas, and Scikit-learn. It also has excellent community support and a vast array of resources for beginners and advanced users.

## Key Concepts in Machine Learning
- **Supervised Learning**: Involves training a model on labeled data to predict outcomes for unseen data.
- **Unsupervised Learning**: Deals with unlabeled data, focusing on finding hidden patterns or groupings.
- **Regression**: A type of supervised learning where the output is a continuous value, like predicting house prices.
- **Classification**: Involves predicting discrete labels, like classifying handwritten digits.

## Popular Libraries for Machine Learning in Python
- **NumPy**: Essential for numerical computations and handling large data arrays.
- **Pandas**: A powerful data manipulation and analysis library.
- **Scikit-learn**: A comprehensive library for building and evaluating machine learning models.

## Building Your First Machine Learning Model

Let’s walk through a simple project to predict house prices using linear regression. We’ll use the **Pandas** library to load and preprocess the data, and **Scikit-learn** to build and train the model.

### Step 1: Install Required Libraries

First, you need to install the necessary libraries:

\`\`\`bash
pip install numpy pandas scikit-learn
\`\`\`

### Step 2: Load and Preprocess Data

Let’s load the dataset and inspect the data:

\`\`\`python
import pandas as pd

# Load dataset
df = pd.read_csv('house_data.csv')

# Check for missing values and clean data
df = df.dropna()
\`\`\`

### Step 3: Train a Linear Regression Model

Next, we’ll train a linear regression model to predict house prices:

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Split data into features (X) and target (y)
X = df[['Square_Feet', 'Bedrooms', 'Bathrooms']]  # Example features
y = df['Price']  # Target variable

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
print(f'Model Accuracy: {model.score(X_test, y_test)}')
\`\`\`

## Conclusion

This simple example demonstrates how easy it is to get started with machine learning in Python. By leveraging powerful libraries and a clear understanding of key concepts, you can begin applying machine learning to real-world problems. Continue learning and experimenting to enhance your skills and tackle more complex challenges.

Stay tuned for more tutorials on different machine learning algorithms and techniques!
      `,
      publishedAt: "2025-03-22",
    },
  ],
};
