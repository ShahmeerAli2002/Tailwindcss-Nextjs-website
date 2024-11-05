const CommunityGuidelines = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 my-6 sm:my-8">
          Community Guidelines
        </h1>
        <div className="text-white text-sm sm:text-base">
          <p className="mb-4">
            Welcome to our community! We aim to provide a friendly, inclusive, and supportive environment for everyone. Please adhere to the following guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 sm:pl-4">
            <li>Be respectful and courteous to all members.</li>
            <li>No harassment, hate speech, or discriminatory remarks.</li>
            <li>Stay on topic and contribute constructively.</li>
            <li>Avoid spamming or self-promotion outside designated channels.</li>
            <li>Report any issues to moderators or admins.</li>
          </ul>
          <p className="mt-4">Thank you for helping make this community a great place for everyone!</p>
        </div>
      </div>
    );
  };
  
  export default CommunityGuidelines;