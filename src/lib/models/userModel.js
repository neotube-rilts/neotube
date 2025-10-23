// src/lib/models/userModel.js

export function createDefaultUser(firebaseUser) {
  const now = new Date().toISOString();

  return {
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    nickname: firebaseUser.displayName || '',
    profileImageUrl: firebaseUser.photoURL || '',
    provider: firebaseUser.providerData?.[0]?.providerId || 'google',
    createdAt: now,
    updatedAt: now,

    // 커스텀 필드들
    bio: '',
    point: 0,
    role: 'user',
    isBanned: false,
    postCount: 0,
    commentCount: 0,
    lastLoginAt: now,
    tags: [],
    followers: [],
    following: [],
    notificationSettings: {
      comment: true,
      like: true,
      mention: true
    },
    isVerified: false
  };
}
