// projectData.js
// Contains structured data for all projects

const projectData = {
    "EduFlood+": {
      title: "EduFlood+",
      githubUrl: "https://github.com/InfamousBolt/EduFlood",
      tagline: "A full-fledged web app built using ReactJS, Bootstrap and other TPLs to provide relief in times of sea-level rise and coastal flooding",
      sections: [
        {
          type: "section",
          title: "Motive",
          content: "Being a low-lying country, certain parts of India are very much prone to coastal floods as the sea-level rises. For the scope of this project, we selected Mumbai because of its high population density and frequently flooded coasts. Data is gathered from GIS to provide a vulnerability map too along with a chatbot powered by OpenAI."
        },
        {
          type: "section",
          title: "Tech Stack Used",
          content: "ReactJS, Bootstrap, Firebase, Flask, Python, NPM TPLs, API Integration(Backend, Twilio, OpenAI)\n\nNote: The Backend stuff is not uploaded here for privacy reasons"
        },
        {
          type: "section",
          title: "Features",
          subsections: [
            {
              title: "3D models with AR interactivity",
              content: "Google's model-viewer was used to integrate 3D models in GLB format and add a \"View in AR\" option when the site is opened in mobile devices."
            },
            {
              title: "Interactive stories",
              content: "A modal component renders a video which, upon ending, provides the user with choices to decide the next outcome. State Management and Bootstrap modals were used for it."
            },
            {
              title: "Immersive Home Screen",
              content: "An immersive home screen with custom fonts and navigation scroll helps user smoothly navigate through the entire web-app. Routing is also used for some of the features."
            },
            {
              title: "24*7 Active Chatbot powered by OpenAI",
              content: "A chatbot using the openAI API and front end widget was made to help user with queries. NOTE: Generation of response can sometime take a while because the call is made to openAI API to fetch the response."
            },
            {
              title: "Am I Safe and Vulnerability Map",
              content: "Using Leaflet, maps were integrated to show and stimulate what areas are vulnerable and safe incase of a flood event in Mumbai. User can simulate a sea-level rise(example 1mm/2mm) and check what areas might get flooded."
            },
            {
              title: "Additional",
              content: "The project has much more to it. Users can collab and share pics of Flood which get stored in Firebase, get flood SMS alerts using Twilio, Subscribe themselves to receive alerts and more. Get in touch to understand the complete scope of this project. Thanks :)"
            }
          ]
        }
      ]
    },
    "Lexical RTE": {
      title: "Rich Text Editor Using Lexical",
      githubUrl: "https://github.com/InfamousBolt/lexical-markdown-plugin-example",
      tagline: "A Rich Text Editor built using lexical which also supports Lexical Nodes to Markdown conversion and vice versa along with various other features such as mentions and alignments implemented using Lexical plugins.",
      sections: [
        {
          type: "section",
          title: "Tech-stack used",
          content: "ReactJS, Typescript, Lexical TPL, BootStrap"
        },
        {
          type: "section",
          title: "Custom Transformers",
          content: "Custom Markdown Transformers to support mentions, underline, alignment and other conversions which are not supported by Core Markdown were added to this project. You can read more about them at the lexical documentation site under the lexical-markdown package."
        },
        {
          type: "section",
          title: "Features",
          subsections: [
            {
              title: "Align test",
              content: "Showing functionality of how alignment works with markdown"
            },
            {
              title: "Mention test",
              content: "Showing functionality of how mentions work with markdown"
            },
            {
              title: "Compare test",
              content: "Showing comparison between different types of content in Basic HTML and Lexical"
            }
          ]
        }
      ]
    },
    "ADIP Cochlear Implants": {
      title: "ADIP Cochlear Implants",
      githubUrl: "https://github.com/OrganiCod3rs-SIH/ayjnishd-frontend",
      tagline: "Recreation of ADIP Cochlear Implant Site for SIH, enabling children with high degree of hearing loss to procure cochlear implants under minimum costs.",
      sections: [
        {
          type: "section",
          title: "What is this site about?",
          content: "This site is to exclusively garner information about Cochlear Implant under the ADIP scheme by the Indian Government. It enables children with high degree of hearing loss to procure cochlear implants under minimum costs. It can be used to schedule appointments, check application status, check eligibility criteria and other stuff."
        },
        {
          type: "section",
          title: "How to navigate around this site?",
          content: "This site uses the modular component structure by NextJS to seamlessly render the UI components which you can interact with. In a nutshell, the website consists of different routes which are added as tabs to the navigation bar. This navigation bar can then be used to go to different pages within the website.\n\nA user can scroll through the website and interact with different contents:\n- Apply for the scheme\n- Check application status\n- Go through the FAQ\n- Learn about the product and much more"
        },
        {
          type: "section",
          title: "Tech Stack Used",
          content: "It was taken into utmost care that this site adapts to the modern and latest development practices and technology. Hence the tech-stack used comprises of the following:\n\n- Languages: Python, JavaScript, HTML\n- Frameworks and Database: Rasa, Model Viewer, Docker, ExpressJS, PostgreSQL, NextJS, React"
        },
        {
          type: "section",
          title: "Stand-out Features",
          subsections: [
            {
              title: "3D/AR Model",
              content: "This site showcases a 3D model of the concerned object (Cochlear Implant) on the home page. The 3D model is accessible on all machines giving an interactive 360 degree view of the product, with AR functionality available on iOS devices. The AR feature lets you place the object in your surrounding using augmented reality and enables you to inspect it more closely."
            },
            {
              title: "Chatbot",
              content: "A chatbot is provided to get easy answers to common queries. The chatbot can be trained to add more features as per request. This was achieved using Rasa Open source and deployed on Heroku for a 24*7 active service. It can answer common queries like 'How can you help me?', 'What are cochlear implants?', 'Who is eligible to apply?'"
            },
            {
              title: "Multi-lingual support",
              content: "Our website can render the content in 19+ Indian languages. This is done with the help of Google Translate and provides the translated content within seconds. User can choose languages from a list including Hindi, Kannada, Punjabi, Nepali, Tamil and many more."
            },
            {
              title: "Maps",
              content: "Users can quickly check all the hospitals enrolled in the scheme near to them. This map is interactively displayed on the website."
            },
            {
              title: "Speech recognition",
              content: "We also have a speech recognition model which can be used by users who can't type for any reason. They can simply ask their query through their microphone and an appropriate answer will be displayed."
            },
            {
              title: "Read-aloud",
              content: "Keeping user-accessibility in mind, we have a read-aloud feature which currently features two languages, English and Hindi, although more languages can be integrated. This feature reads aloud the content displayed on the users' screen, helpful to users with visual impairment."
            },
            {
              title: "Admin panel",
              content: "There's an additional site to manage all the user interaction. An admin can manage and view all the applications and feedbacks from the user and act on them accordingly."
            },
            {
              title: "Additional features",
              content: "Check-hearing test to estimate hearing loss degree, Dynamic PDF rendering, NEWS API for ADIP scheme updates, and a floating contact button for direct assistance."
            }
          ]
        }
      ]
    },
    "RentIt": {
    title: "RentIt",
    githubUrl: "https://github.com/InfamousBolt/RentIt",
    tagline: "A simple one of a kind app that helps users rent out their personal items, making money from unused belongings and helping others save.",
    sections: [
      {
        type: "section",
        title: "Motive",
        content: "We have a lot of stuff lying in our home that we don't frequently use or maybe we want some stuff that we will only be using for few days so buying it will be useless. Here's where the principle of renting stuff from user to user comes in. You can make money by giving out your stuff to rent and save money by renting stuff instead of buying."
      },
      {
        type: "section",
        title: "Tech Stack",
        content: "Made with Flutter framework and integrated with several dependencies from PubDev. The project uses Firebase as backend and uses Google Auth for user sign in."
      },
      {
        type: "section",
        title: "Key Features",
        subsections: [
          {
            title: "User to User Rentals",
            content: "The app enables direct peer-to-peer rental of personal items, creating a sharing economy."
          },
          {
            title: "Google Authentication",
            content: "Secure sign-in process using Google's authentication services."
          },
          {
            title: "Firebase Integration",
            content: "Real-time database management for listings, user profiles, and rental transactions."
          },
          {
            title: "Cross-platform Experience",
            content: "Built with Flutter to ensure consistent experience across iOS and Android devices."
          }
        ]
      }
    ]
  },
  "HMM POS Tagger": {
    title: "Hidden Markov Model Part-of-Speech Tagger",
    githubUrl: "https://github.com/InfamousBolt/Hidden-Markov-Model-Part-of-Speech-Tagger",
    tagline: "A sophisticated Part-of-Speech (POS) tagger using Hidden Markov Models with the Viterbi algorithm for natural language processing.",
    sections: [
      {
        type: "section",
        title: "Overview",
        content: "This project implements a Part-of-Speech (POS) tagger using Hidden Markov Models (HMM) with the Viterbi algorithm. The system uses HMM to predict the most likely sequence of POS tags for a given sentence. It includes three main implementations with increasing sophistication in handling unknown words and improving accuracy."
      },
      {
        type: "section",
        title: "Features",
        subsections: [
          {
            title: "Multiple Viterbi Implementations",
            content: "Different versions of the algorithm with progressive improvements for better accuracy."
          },
          {
            title: "Unknown Word Handling",
            content: "Sophisticated handling of unseen words using Laplace smoothing, hapax legomena probability estimation, and word classification based on length and suffixes."
          },
          {
            title: "Performance Metrics",
            content: "Comprehensive evaluation including overall accuracy, accuracy on words with multiple tags, accuracy on unseen words, and top K correct and incorrect predictions."
          },
          {
            title: "Word Classification",
            content: "Advanced categorization of words into NUM (containing only numbers), TINY (less than 4 characters), SHORT_S (4-9 chars ending with 's'), SHORT (4-9 chars), LONG_S (10+ chars ending with 's'), and LONG (10+ chars)."
          }
        ]
      },
      {
        type: "section",
        title: "Technical Details",
        content: "The project consists of several components:\n\n- `mp8.py`: Main application file\n- `utils.py`: Utility functions for data loading and evaluation\n- `viterbi_2.py`: Implementation with improved Laplace smoothing\n- `viterbi_3.py`: Enhanced implementation with word classification"
      },
      {
        type: "section",
        title: "Implementation Details",
        subsections: [
          {
            title: "Viterbi 2",
            content: "Implements improved Laplace smoothing, uses hapax legomena analysis for better unknown word handling, and maintains separate emission and transition probabilities."
          },
          {
            title: "Viterbi 3",
            content: "Adds sophisticated word classification, enhanced handling of suffixes and prefixes, improved probability estimation for unknown words, and more robust smoothing techniques."
          }
        ]
      }
    ]
  },
    "Neural Network Image Classifier": {
      "title": "Neural Network Image Classification with PyTorch",
      "githubUrl": "https://github.com/InfamousBolt/Neural-Network-Image-Classification-with-PyTorch",
      "tagline": "A PyTorch-based image classification project featuring multiple neural network implementations, from simple feedforward networks to convolutional neural networks (CNNs).",
      "sections": [
        {
          "type": "section",
          "title": "Project Overview",
          "content": "This project implements and compares different neural network architectures for image classification:\n1. Part 1: Simple feedforward neural network\n2. Part 2: Advanced CNN architecture with modern techniques"
        },
        {
          "type": "section",
          "title": "Features",
          "subsections": [
            {
              "title": "Basic Neural Network",
              "content": "Simple feedforward architecture with a single hidden layer (128 units), ReLU activation, Adam optimizer, input standardization, and cross-entropy loss."
            },
            {
              "title": "Advanced CNN",
              "content": "Convolutional neural network architecture featuring multiple convolutional layers (16 and 32 channels), batch normalization, MaxPooling, dropout (0.25), learning rate scheduling, best model checkpointing, advanced data preprocessing, and improved training methodology."
            }
          ]
        },
        {
          "type": "section",
          "title": "Technical Details",
          "content": "The project includes multiple network architectures:\n\nBasic Network (Part 1):\nInput -> Linear(in_size, 128) -> ReLU -> Linear(128, out_size)\n\nCNN Architecture (Part 2):\nConv2d(3, 16) -> BatchNorm -> ReLU -> MaxPool -> Conv2d(16, 32) -> BatchNorm -> ReLU -> MaxPool -> Linear(flattened_size, 128) -> ReLU -> Dropout(0.25) -> Linear(128, out_size)",
          "subsections": [
            {
              "title": "Implementation Details",
              "content": "The project includes data preprocessing (standardization, reshaping for CNN input), batch training, learning rate scheduling, model checkpointing, early stopping based on validation loss, and comprehensive performance metrics including accuracy and confusion matrices."
            }
          ]
        }
      ]
    },
    "Diffusion Models on MNIST": {
    "title": "DiffuMNIST: Advanced Diffusion Models for MNIST Digits",
    "githubUrl": "https://github.com/InfamousBolt/DiffusionModelsTraining",
    "tagline": "A PyTorch implementation of Denoising Diffusion Probabilistic Models (DDPM) for generating MNIST digits with both time-conditioning and class-conditioning capabilities.",
    "sections": [
      {
        "type": "section",
        "title": "Project Overview",
        "content": "This project implements a state-of-the-art diffusion model architecture for generating high-quality MNIST digits. The implementation progressively builds from a basic denoising UNet to a fully-featured diffusion model with class-conditional generation.\n\nThe diffusion model works by gradually adding noise to an image and then training a neural network to reverse this process, learning to generate images by starting from pure noise. This approach has led to groundbreaking results in image generation."
      },
      {
        "type": "section",
        "title": "Architecture & Implementation Details",
        "subsections": [
          {
            "title": "Core Components",
            "content": "Unconditional UNet Architecture: A base model with encoder-decoder structure and skip connections\nTime-Conditioned Diffusion: Implements the DDPM paper's forward and reverse diffusion processes\nClass-Conditioned Generation: Extends the model to generate specific digits (0-9) with classifier-free guidance"
          },
          {
            "title": "Technical Specifications",
            "content": "Model Design: Implemented a UNet with downsampling/upsampling blocks and skip connections\nConditioning Methods: Added time and class embeddings through specialized fully-connected layers\nSampling Process: Implemented the DDPM reverse process with classifier-free guidance (γ=5.0)\nHyperparameters: Learning Rate: 1e-3 with exponential decay, Hidden Dimension: 64 channels, Batch Size: 128, Timesteps: 300, Beta Schedule: Linear from 1e-4 to 0.02"
          }
        ]
      },
      {
        "type": "section",
        "title": "Features & Results",
        "subsections": [
          {
            "title": "Single-Step Denoising",
            "content": "Implemented a basic UNet to denoise images corrupted with Gaussian noise (σ=0.5)\nEvaluated the model's performance on out-of-distribution noise levels (σ ranging from 0.0 to 1.0)"
          },
          {
            "title": "Time-Conditioned Diffusion",
            "content": "Trained a diffusion model over 20 epochs that can generate MNIST digits from pure noise\nImplemented the complete DDPM noise schedule and sampling algorithm\nVisualized the generation process through time"
          },
          {
            "title": "Class-Conditioned Generation",
            "content": "Extended the model with class conditioning to generate specific digits\nImplemented classifier-free guidance for improved sample quality\nCreated a complete interactive visualization of the generation process"
          }
        ]
      },
      {
        "type": "section",
        "title": "Advanced Features",
        "content": "Classifier-Free Guidance: Implemented with guidance scale γ=5.0 for higher quality samples\nAnimation Generation: Custom functions to create GIFs of the diffusion process\nOut-of-Distribution Testing: Evaluated the model's robustness to varied noise levels\n\nThe implementation follows the architecture and methodology described in the DDPM paper by Ho et al."
      }
    ]
  },
  "YOLO Object Detection": {
    "title": "YOLOv1 Object Detection on PASCAL VOC",
    "githubUrl": "https://github.com/InfamousBolt/YOLOObjectDetection",
    "tagline": "A PyTorch implementation of the YOLO (You Only Look Once) object detection algorithm trained on the PASCAL VOC 2007 dataset, achieving a minimum mAP of 0.5 after 50 epochs.",
    "sections": [
      {
        "type": "section",
        "title": "Project Overview",
        "content": "This project implements the YOLO (You Only Look Once) object detection algorithm applied to the PASCAL VOC 2007 dataset. YOLO is a state-of-the-art real-time object detection system that processes images in a single network evaluation, making it significantly faster than previous detection methods while maintaining competitive accuracy.\n\nUnlike traditional object detection approaches that rely on region proposal and subsequent classification, YOLO frames detection as a regression problem to spatially separated bounding boxes and associated class probabilities."
      },
      {
        "type": "section",
        "title": "Architecture & Implementation Details",
        "subsections": [
          {
            "title": "Core Components",
            "content": "Network Backbone: ResNet50 architecture pretrained on ImageNet, adapted for the detection task\nOutput Grid: 14×14 grid, with each cell predicting 2 bounding boxes (differs from original YOLO's 7×7 grid)\nLoss Function: Custom YOLO loss combining localization error, confidence error, and classification error\nBounding Box Prediction: Each cell predicts B=2 boxes, each with 5 parameters (x, y, w, h, confidence)\nClass Prediction: Each grid cell predicts class probabilities for 20 PASCAL VOC categories"
          },
          {
            "title": "Technical Specifications",
            "content": "Model Design: ResNet50 backbone with custom detection head\nLoss Components: Bounding box coordinate loss, Object confidence loss, No-object confidence loss, Classification loss\nHyperparameters: Learning Rate: 0.001 with scheduled reductions, Batch Size: 16, λ_coord = 5, λ_noobj = 0.5"
          }
        ]
      },
      {
        "type": "section",
        "title": "Features & Results",
        "subsections": [
          {
            "title": "Detection Performance",
            "content": "Achieved a minimum mAP (mean Average Precision) of 0.5 on the PASCAL VOC test set. Training progression shows steady improvement: Epoch 5: mAP = 0.0296, Epoch 10: mAP = 0.2092, Epoch 15: mAP = 0.3366, Epoch 20: mAP = 0.4113, Epoch 25: mAP = 0.4556, Epoch 30: mAP = 0.4857"
          },
          {
            "title": "Visualization and Debugging",
            "content": "Built-in visualization of object detection results, Performance evaluation using mAP (mean Average Precision), Support for displaying bounding boxes with class names and confidence scores"
          }
        ]
      },
      {
        "type": "section",
        "title": "Loss Function Implementation",
        "content": "The core of the YOLO algorithm is its multi-part loss function, which handles:\n\n1. Bounding box coordinate regression: Penalizes errors in the predicted box coordinates\n2. Object confidence scoring: Measures how confident the model is that a box contains an object\n3. No-object confidence suppression: Penalizes boxes in cells where no objects exist\n4. Class probability prediction: Classifies what type of object is contained in each grid cell\n\nThis implementation follows the architecture described in the original YOLO paper by Redmon et al."
      }
    ]
  },
  "LLM Bias Examination": {
    "title": "Examining Bias in LLM Prompt Chaining",
    "githubUrl": "https://github.com/InfamousBolt/LLM-Bias-Prompt-Chaining",
    "tagline": "A comprehensive investigation of how prompt chaining techniques affect the propagation of bias in Large Language Model outputs, using the StereoSet dataset as a benchmark.",
    "sections": [
      {
        "type": "section",
        "title": "Project Overview",
        "content": "This project explores how prompt chaining—a technique where each step's output feeds into the next prompt—influences bias propagation in Large Language Models (LLMs). Due to their generative nature, LLMs may produce outputs containing unintended biases. We investigate whether sequential prompting techniques can mitigate or potentially amplify stereotypical associations in model responses.\n\nUsing the StereoSet dataset as a benchmark, we compare bias levels between direct (single-step) prompting and chained (multi-step) prompting across different stereotype categories including gender, race, religion, and profession."
      },
      {
        "type": "section",
        "title": "Research Questions",
        "content": "This project addresses three key research questions:\n\n1. How does multi-step prompt chaining affect the propagation and amplification of social biases in LLM-generated outputs?\n2. Which steps of a prompt chain are more likely to amplify stereotypes (if any)? Does this suggest an optimal chain length to minimize bias?\n3. Do certain classes of stereotypes more commonly get amplified when using prompt chaining?"
      },
      {
        "type": "section",
        "title": "Methodology & Implementation",
        "subsections": [
          {
            "title": "Dataset",
            "content": "We utilize the StereoSet dataset, which provides context statements that may evoke stereotypical associations, three completion options for each context (stereotypical, anti-stereotypical, and unrelated), and annotations across four main bias categories: gender, race, religion, and profession."
          },
          {
            "title": "Prompting Approaches",
            "content": "Direct Prompting (Baseline): Single-step prompting using neutral format as control condition\nPrompt Chaining (Experimental): Three-step sequential chain with baseline continuation, bias triggering frame, and free generation avoiding identified stereotypes. Variations with different chain lengths (2-5 steps) to identify optimal configurations."
          },
          {
            "title": "Bias Quantification",
            "content": "We developed a novel scoring system based on similarity measurements: Stereotype Score (Jaccard similarity with stereotypical completions), Anti-stereotype Score (Jaccard similarity with anti-stereotypical completions), and Bias Score (computed as Stereotype Score - Anti-stereotype Score)."
          }
        ]
      },
      {
        "type": "section",
        "title": "Key Findings",
        "subsections": [
          {
            "title": "Chain Length Effects",
            "content": "Shorter chains (2-3 steps) generally reduce bias compared to direct prompting. Longer chains (4+ steps) tend to reintroduce or amplify bias. Non-linear relationship between chain depth and bias mitigation."
          },
          {
            "title": "Category-Specific Effects",
            "content": "Gender and profession stereotypes were more susceptible to bias propagation. Race and religion categories showed more consistent bias reduction through chaining."
          },
          {
            "title": "Model Robustness",
            "content": "Modern LLMs (LLaMA 3.1 8B-Instruct) exhibit generally low bias scores. Even with intentional bias triggers, models tend to produce relatively balanced outputs."
          }
        ]
      },
      {
        "type": "section",
        "title": "Practical Applications",
        "content": "Our findings have important implications for AI system design:\n\n1. Optimal Chain Architecture: Using 2-3 step chains with explicit bias awareness prompts can reduce stereotypical associations\n2. Domain-Specific Adjustments: Extra caution warranted for gender and profession topics\n3. User Interaction Design: Systems can incorporate explicit stereotype-avoidance instructions in multi-turn dialogue systems\n\nThis research demonstrates that prompt chaining can be an effective technique for bias mitigation when properly configured."
      }
    ]
  },
  "Docker Distributed LLM": {
    "title": "Docker Distributed LLM",
    "githubUrl": "https://github.com/InfamousBolt/Docker-Distributed-LLM",
    "tagline": "A containerized distributed language model system using Docker and Python (Flask) that simulates distributed CPU inference on edge devices with configurable latency ranges.",
    "sections": [
      {
        "type": "section",
        "title": "Project Overview",
        "content": "We developed a containerized version of b4rtaz's dllama repo, using Docker and Python (Flask). This version simulates distributed CPU inference on edge devices with a configurable latency range. Given this range, we simulate realistic edge device inference on a single device with randomized communication latency.\n\nWe provide a clean frontend user interface, accessible at http://localhost:3001 once the docker system has been setup. This interface enables prompting and measurement of response time metrics (TTFT, TTLT, simulated latency) as well as CPU/GPU metrics on a per-container basis."
      },
      {
        "type": "section",
        "title": "System Architecture",
        "subsections": [
          {
            "title": "Core Components",
            "content": "Containerized distributed inference system with configurable worker nodes\nFlask-based backend for orchestrating distributed computation\nReact frontend for user interaction and metrics visualization\nDocker Compose orchestration for multi-container deployment\nSupport for Llama 3.2 1B and 3B models with Q40 and F32 quantization"
          },
          {
            "title": "Key Features",
            "content": "Configurable latency simulation for realistic edge device modeling\nReal-time metrics tracking (TTFT, TTLT, CPU/GPU usage)\nScalable worker node architecture (1-8 nodes supported)\nMultiple quantization formats (Q40, F32)\nWeb-based interface for easy interaction and monitoring"
          }
        ]
      },
      {
        "type": "section",
        "title": "Technical Implementation",
        "subsections": [
          {
            "title": "Infrastructure",
            "content": "Docker containerization for consistent deployment across environments\nDocker Compose for multi-service orchestration\nPython Flask backend for API and worker coordination\nC++ integration for high-performance inference operations\nVolume mounting for model sharing across containers"
          },
          {
            "title": "Experimental Configuration",
            "content": "Multiple branch configurations for different experimental setups\nNaming convention: modelsize-quant-nodes-threads (e.g., 1b-q40-4-1)\nSupport for 1B and 3B parameter models\nConfigurable worker threads (1-3 per container)\nVariable node counts (1, 2, 4, 8 workers)"
          }
        ]
      },
      {
        "type": "section",
        "title": "Performance Metrics & Analysis",
        "content": "The system provides comprehensive performance monitoring including:\n\n- Time to First Token (TTFT) measurement\n- Time to Last Token (TTLT) tracking\n- Simulated network latency with configurable ranges\n- Per-container CPU and memory usage monitoring\n- Real-time system status visualization\n\nMetrics are displayed in a user-friendly dashboard that updates during inference, allowing for real-time performance analysis and system optimization."
      },
      {
        "type": "section",
        "title": "Academic Context",
        "content": "This project was developed as a final project for UIUC CS598 FLA: Systems for GenAI, Spring 2025. The system demonstrates practical applications of distributed computing concepts in the context of large language model inference, with particular focus on edge device simulation and performance optimization.\n\nThe project explores the trade-offs between model size, quantization methods, worker distribution, and inference performance in resource-constrained environments."
      }
    ]
  }
  };
  
  export default projectData;