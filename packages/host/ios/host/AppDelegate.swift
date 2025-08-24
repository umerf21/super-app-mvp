import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

// If the RNAppAuth Swift module is available, this import will work;
// if you rely on the bridging header only, it's fine if this can't import.
#if canImport(RNAppAuth)
import RNAppAuth
#endif

@main
class AppDelegate: RCTAppDelegate, RNAppAuthAuthorizationFlowManager {
  // Required by RNAppAuth
  public weak var authorizationFlowManagerDelegate: RNAppAuthAuthorizationFlowManagerDelegate?

  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    // Set your RN root component name
    self.moduleName = "host"

    // Provide the default dependency provider (RN 0.78 pattern)
    self.dependencyProvider = RCTAppDependencyProvider()

    // Optional initial props passed to the root view
    self.initialProps = [:]
    

    // Hand off to RCTAppDelegate to create window & start RN
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  // RN 0.78: point RN to your JS bundle (dev vs prod)
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    return self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }

  // MARK: - OAuth redirect handling (react-native-app-auth)
  override func application(
    _ app: UIApplication,
    open url: URL,
    options: [UIApplication.OpenURLOptionsKey : Any] = [:]
  ) -> Bool {
    // Let RNAppAuth try to resume the external user-agent flow first
    if let delegate = authorizationFlowManagerDelegate,
       delegate.resumeExternalUserAgentFlow(with: url) {
      return true
    }
    // If not handled by RNAppAuth, pass to RN/other handlers
    return super.application(app, open: url, options: options)
  }
}
