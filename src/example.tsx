import { useState } from 'react';

// Example component to test ESLint rules
export const ExampleComponent = () => {
  // ✅ Correct: Boolean variables follow naming convention
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  
  // ❌ This would trigger an error: boolean variable doesn't follow naming convention
  // const visible = true;
  
  // ❌ This would trigger an error: unused variable
  // const unusedVar = 'test';
  
  const handleToggle = (shouldShow: boolean) => {
    setIsVisible(shouldShow);
  };
  
  const handlePermissionToggle = () => {
    setHasPermission(!hasPermission);
  };
  
  const handleEditToggle = () => {
    setCanEdit(!canEdit);
  };
  
  return (
    <div>
      {isVisible && (
        <div>
          <h1>ESLint 9 Setup Complete!</h1>
          <p>Boolean naming conventions: {hasPermission ? 'Enabled' : 'Disabled'}</p>
          <button onClick={() => handleToggle(!isVisible)}>
            Toggle Visibility
          </button>
          <button onClick={handlePermissionToggle}>
            Toggle Permission
          </button>
          {canEdit && <button>Edit</button>}
          <button onClick={handleEditToggle}>
            Toggle Edit Mode
          </button>
        </div>
      )}
    </div>
  );
};

